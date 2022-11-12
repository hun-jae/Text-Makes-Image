import { Button } from "react-bootstrap";

function SelectImg(props) {
  // const getData = async () => {
  //   await axios
  //     .get("http://localhost:3000/data/SelectImg.json")
  //     .then((result) => {
  //       console.log("Then");
  //       setData(result.data);
  //     })
  //     .catch((error) => {
  //       console.log("Error::", error);
  //     });
  // };

  return (
    <div>
      <h3>{props.data.sentence}</h3>
      <Img img={props.data.img[0]} page={props.page} />
    </div>
  );
}

// Three picture
// function ThreeImg(props) {
//   return (
//     <div className="col-md-4">
//       {props.img.map((item, idx) => {
//         return (
//           <div>
//             <img src={item} width="100%" />
//             {item}
//             <Button>선택</Button>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// One picture
function Img(props) {
  var url = props.img;
  // var url = "test_img/1.jpg";
  return (
    <div>
      <img src={url} width="100%" />
      <Button
        onClick={() => {
          alert(props.page + 1 + "번 그림을 재생성하시겠습니까?");
        }}
      >
        재생성
      </Button>
    </div>
  );
}

export default SelectImg;
