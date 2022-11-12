import SelectImg from "./SelectImg";
import { useState, useEffect } from "react";
import Loading from "../components/Loading";
import { Button } from "react-bootstrap";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import axios from "axios";
// import localData from "./imageResult.json"; // for test
import localData from "./localData.json"; // for test

function ImageResult() {
  const [res, setRes] = useState([]);
  const [loading, setLoading] = useState(null);
  const [page, setPage] = useState(0);

  const getData = () => {
    // await axios.get(`./ImageResult.json`).then((res) => setRes(res));
    console.log(localData);
    setRes(localData);
  };

  useEffect(() => {
    setLoading(true);
    getData();
    console.log("useEffect", res);
  }, []);

  return (
    <div>
      {!loading ? (
        <Loading />
      ) : (
        <>
          <SelectImg data={res[page]} page={page} />
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
        </>
      )}
    </div>
  );
}

export default ImageResult;
