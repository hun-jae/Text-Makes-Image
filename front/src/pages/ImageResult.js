import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import ControlledCarousel from "../components/ControlledCarousel";

function ImageResult() {
  const [res, setRes] = useState([]);
  const { state } = useLocation();

  // state: text, url
  useEffect(() => {
    try {
      console.log(state);
      const getData = async () => {
        await axios.get(state.url).then((response) => setRes(response.data));
        console.log(res);
      };
      getData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div>
      <ControlledCarousel data={state} />
    </div>
  );
}

export default ImageResult;
