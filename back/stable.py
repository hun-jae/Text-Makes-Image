from PIL import Image
#from IPython.display import display
import torch as th
import torch.nn as nn

from glide_text2im.clip.model_creation import create_clip_model
from glide_text2im.download import load_checkpoint
from glide_text2im.model_creation import (
    create_model_and_diffusion,
    model_and_diffusion_defaults,
    model_and_diffusion_defaults_upsampler,
)
from glide_text2im.tokenizer.simple_tokenizer import SimpleTokenizer

has_cuda = th.cuda.is_available()
device = th.device('cpu' if not has_cuda else 'cuda')

#이미지 생성에 필요한 모델들을 불러옴
print("model load start")
options = model_and_diffusion_defaults()
options['use_fp16'] = has_cuda
options['timestep_respacing'] = '100' 

model, diffusion = create_model_and_diffusion(**options)

model.load_state_dict(th.load("glide_model_cache/base.pt", map_location=th.device(device)))
if has_cuda:
    model.convert_to_fp16()
model.to(device)
options_up = model_and_diffusion_defaults_upsampler()
options_up['use_fp16'] = has_cuda
options_up['timestep_respacing'] = 'fast27'

model_up, diffusion_up = create_model_and_diffusion(**options_up)
if has_cuda:
    model_up.convert_to_fp16()
model_up.to(device)

model_up.load_state_dict(th.load("glide_model_cache/upsample.pt", map_location=th.device(device)))  

#clip_model 로드
clip_model = create_clip_model(device=device)
clip_model.image_encoder.load_state_dict(th.load("glide_model_cache/clip_image_enc.pt", map_location=th.device(device)))
clip_model.text_encoder.load_state_dict(th.load("glide_model_cache/clip_text_enc.pt", map_location=th.device(device)))
print("model load finish")

#이미지를 저장해주는 함수 (입력된 텍스트 이름으로 저장)
def show_images(batch: th.Tensor, temp):
    """ Display a batch of images inline. """
    scaled = ((batch + 1)*127.5).round().clamp(0,255).to(th.uint8).cpu()
    reshaped = scaled.permute(2, 0, 3, 1).reshape([batch.shape[2], -1, 3])
    img = Image.fromarray(reshaped.numpy())
    img.save('images/'+temp+'.jpg','JPEG')
    return temp+'.jpg'

#이미지를 생성해주는 함수
def make_img(temp):
  # 샘플링 parameters
  prompt = temp
  batch_size = 1
  guidance_scale = 5.0
  
  #업샘플링 계수
  upsample_temp = 0.997


  # 텍스트 토큰을 모델에 넣어줌
  tokens = model.tokenizer.encode(prompt)
  tokens, mask = model.tokenizer.padded_tokens_and_mask(
      tokens, options['text_ctx']
  )

  model_kwargs = dict(
      tokens=th.tensor([tokens] * batch_size, device=device),
      mask=th.tensor([mask] * batch_size, dtype=th.bool, device=device),
  )

  # 클립모델 setup
  cond_fn = clip_model.cond_fn([prompt] * batch_size, guidance_scale)

  # base 모델에서 sample 추출
  model.del_cache()
  samples = diffusion.p_sample_loop(
      model,
      (batch_size, 3, options["image_size"], options["image_size"]),
      device=device,
      clip_denoised=True,
      progress=True,
      model_kwargs=model_kwargs,
      cond_fn=cond_fn,
  )
  model.del_cache()

  #tokens setup
  tokens = model_up.tokenizer.encode(prompt)
  tokens, mask = model_up.tokenizer.padded_tokens_and_mask(
      tokens, options_up['text_ctx']
  )

  # model create
  model_kwargs = dict(
      low_res=((samples+1)*127.5).round()/127.5 - 1,

      tokens=th.tensor(
          [tokens] * batch_size, device=device
      ),
      mask=th.tensor(
          [mask] * batch_size,
          dtype=th.bool,
          device=device,
      ),
  )

  # base 모델에서 sample추출
  model_up.del_cache()
  up_shape = (batch_size, 3, options_up["image_size"], options_up["image_size"])
  up_samples = diffusion_up.ddim_sample_loop(
      model_up,
      up_shape,
      noise=th.randn(up_shape, device=device) * upsample_temp,
      device=device,
      clip_denoised=True,
      progress=True,
      model_kwargs=model_kwargs,
      cond_fn=None,
  )[:batch_size]
  model_up.del_cache()

  # 이미지 저장
  show_images(up_samples, temp)
if __name__ == "__main__":
    print(__name__)