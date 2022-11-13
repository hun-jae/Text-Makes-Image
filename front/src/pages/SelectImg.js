import { Button } from "react-bootstrap";

function SelectImg(props) {
  return (
    <div>
      <h3>{props.text}</h3>
      <Img url={props.url} page={props.page} />
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
  // var url = "test_img/1.jpg";
  return (
    <div>
      <img src={props.url} width="100%" />
      {console.log(props.url)}
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
