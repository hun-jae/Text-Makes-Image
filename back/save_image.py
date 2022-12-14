import torch
from torch import autocast
from diffusers import StableDiffusionPipeline

model_id = "CompVis/stable-diffusion-v1-4"
device = "cuda"


pipe = StableDiffusionPipeline.from_pretrained(model_id, use_auth_token=True)
pipe = pipe.to(device)
def show_images(prompt):
  with autocast("cuda"):
    image = pipe(prompt, guidance_scale=7.5).images[0]
    
  #display(image)
  image.save(f"images/{prompt}.png")
if __name__=="__main__":
  print("__main__")