import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import ControlledCarousel from "../components/ControlledCarousel";
import Loading from "../components/Loading";

function ImageResult() {
  const [res, setRes] = useState([]);
  const [page, setPage] = useState(0);
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
      {/* <SelectImg text={state[page].text} url={state[page].url} page={page} />
      <Button
        onClick={() => {
          if (page > 0) setPage(page - 1);
        }}
      >
        <BiLeftArrow />
      </Button>
      <Button
        onClick={() => {
          if (page < state.length - 2) setPage(page + 1);
        }}
      >
        <BiRightArrow />
      </Button>
      <div>{page + 1 + " / " + (state.length - 1)}</div> */}
      <ControlledCarousel data={state}/>
      
    </div>
  );
}

export default ImageResult;
