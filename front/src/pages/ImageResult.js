import SelectImg from "./SelectImg";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import axios from "axios";
// import localData from "./imageResult.json"; // for test
import localData from "./localData.json"; // for test
import { useLocation } from "react-router-dom";

function ImageResult() {
  const [res, setRes] = useState([]);
  const [page, setPage] = useState(0);
  const {state} = useLocation();
  // state: text, url
  useEffect(() => {
    try{
      console.log(state);
      const getData = async () => {
        await axios.get(state.url).then((response) => setRes(response.data));
        console.log(res);
      };
      getData();
    } catch (error){
      console.log(error);
    }
  }, []);

  return (
    <div>
          <SelectImg text={state.text} url={state.url} page={page} />
          <Button
            onClick={() => {
              if (page > 0) setPage(page - 1);
            }}
          >
            <BiLeftArrow />
          </Button>
          <Button
            onClick={() => {
              if (page < res.length - 1) setPage(page + 1);
            }}
          >
            <BiRightArrow />
          </Button>
          <div>{page + 1 + " / " + res.length}</div>
    </div>
  );
}

export default ImageResult;
