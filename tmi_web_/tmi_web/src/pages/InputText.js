import { useState, useEffect } from "react";
import axios from "axios";

function InputText() {
  let [inputValue, setInputValue] = useState("");
  
  return (
    <div>
      <textarea
        type="text"
        placeholder="Plz input sentences you want to transform"
        style={{ width: "500px", height: "300px" }}
        onChange={(e) => setInputValue(e.target.value)}
      ></textarea>
      <button>Enter</button>
      {inputValue}
    </div>
  );
}

function SendText() {
  const [text, setText] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchText = async () => {
    try {
      // 요청이 시작 할 때에는 error 와 text 를 초기화하고
      setError(null);
      setText(null);
      // loading 상태를 true 로 바꿉니다.
      setLoading(true);
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/text"
      );
      setText(response.data); // 데이터는 response.data 안에 들어있습니다.
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchText();
  }, []);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;

  // 아직 text가 받아와 지지 않았을 때는 아무것도 표시되지 않도록 해줍니다.
  if (!text) return null;

  // 드디어 text가 성공적으로 받아와 진 상태입니다.
  return (
    <div>
      <ul>
        {text.map((user) => (
          <li key={user.id}>
            {user.username} ({user.name})
          </li>
        ))}
      </ul>
      // button을 클릭하면 API를 다시 불러와줍니다.
      <button onClick={fetchText}>다시 불러오기</button>
    </div>
  );
}

function GetImg() {
  const [img, setImg] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchImg = async () => {
    try {
      // 요청이 시작 할 때에는 error 와 img 를 초기화하고
      setError(null);
      setImg(null);
      // loading 상태를 true 로 바꿉니다.
      setLoading(true);
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/img"
      );
      setImg(response.data); // 데이터는 response.data 안에 들어있습니다.
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchImg();
  }, []);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;

  // 아직 img가 받아와 지지 않았을 때는 아무것도 표시되지 않도록 해줍니다.
  if (!img) return null;

  // 드디어 img가 성공적으로 받아와 진 상태입니다.
  return (
    <div>
      <ul>
        {img.map((user) => (
          <li key={user.id}>
            {user.username} ({user.name})
          </li>
        ))}
      </ul>
      // button을 클릭하면 API를 다시 불러와줍니다.
      <button onClick={fetchImg}>다시 불러오기</button>
    </div>
  );
}

export default InputText;
