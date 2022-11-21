import { Button } from "react-bootstrap";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

function Profile() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/data/test.json")
      .then((result) => {
        setData(result.data);
        console.log(data);
      })
      .catch(() => {
        console.log("failed to load data");
      });
  }, []);

  return (
    <div> 
      <div>{localStorage.getItem("uid")}</div>
      {data.map((idx, i) => {
        return <Img i={i} />;
      })}
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

export default Profile;
