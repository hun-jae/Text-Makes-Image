import { Form, Row, Col, Button, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import api from "../components/api";

function AddFriend() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({ mode: "onBlur" });

  const onSubmit = async (data) => {
    const friend = await api
      .post("/addFriend", {
        uid: localStorage.getItem("uid"),
        fid: data.fid,
      })
      .then((result) => {
        console.log(result.data);
        //친구 추가 성공
        if (result.data === "success") {
          alert(`${fid}님이 친구 추가되었습니다.`);
        }
        // 이미 추가된 친구
        else if (result.data === "no_user") {
          alert("친구 추가에 실패하였습니다. 친구 아이디를 다시 확인해주세요.");
        }
        // No param
        else if (result.data === "already") {
          alert("이미 친구인 사용자입니다.");
        }
        else if (result.data === "me") {
          alert("본인은 사용자로 추가할 수 없습니다.");
        }
        else {
          alert("친구추가에 실패했습니다.");
        }
      })
      .catch(() => {
        console.log("Error Catch");
      });
  };
  const onError = (errors) => {
    console.log(errors);
  };
  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit, onError)}>
        <Form.Label>친구 추가</Form.Label>
        <Form.Group as={Row} className="mb-3" controlId="FindPWFormNickname">
          <Form.Label column sm={3}>
            친구 아이디
          </Form.Label>
          <Col>
          <Form.Control
              name="fid"
              type="text"
              placeholder="친구 아이디"
              {...register("fid", {
                required: "친구 아이디를 입력해주세요."})}
            />
          </Col>
        </Form.Group>
        <Button type="submit">확인</Button>
      </Form>
    </div>
  );
}

export default AddFriend;
