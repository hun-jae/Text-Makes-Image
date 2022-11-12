import { Button } from "react-bootstrap";
import axios from "axios";
import { useState } from "react";

function Feed() {
  const [data, setData] = useState([]);

  return (
    <div>
      <div>{localStorage.getItem("uid")}</div>
      {data.map((idx, i) => {
        return <Img i={i} />;
      })}
      <Button
        onClick={() => {
          axios
            .get("http://localhost:3000/data/test.json")
            .then((result) => {
              setData(result.data);
              console.log(data);
            })
            .catch(() => {
              console.log("failed to load data");
            });
        }}
      >
        버튼
      </Button>
    </div>
  );
}

function Img(props) {
  return (
    <img
      className="col-md-4"
      src={"test_img/" + (props.i + 1) + ".jpg"}
      width="33%"
    />
  );
}

export default Feed;
