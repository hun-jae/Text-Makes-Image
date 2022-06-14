import React, { useState } from "react";
import { useUserContext } from "../components/useUserContext";
import { useNavigate } from "react-router-dom";
import { fetchSignUp } from "../components/fetchSignUp";
import { duplicateCheck } from "../components/duplicateCheck";
import { Link } from 'react-router-dom';
import { Container, Input, Button } from "./styled";

function SignUp() {
// 글로벌 전역 상태값 setUser를 받아옴
// 로그인이 성공적으로 이루어지면 user에 상태값을 넣어줘야지 나중에 다른 컴포넌트에서도 user값을 이용하여 다른 것들을 할 수 있음
  const setUser = useUserContext();

  //url 이동을 위한 useNavigate
  const history = useNavigate();

  //input에서 입력한 아이디와 비밀번호 정보를 담기위한 state
  const [account, setAccount] = useState({
    id: "",
    password: "",
    nickname:"",
  });
  const [pwChkInput, setPwChkInput] = useState("");
  const [pwChk, setPwChk] = useState(false);
  
  //input에 입력하면 자동적으로 account state값 변경
  const onChangeAccount = (e) => {
    //...을 이용하여 account의 복사본을 만들고
    //input에 지정한 네임 속성에 해당 value 값을 넣어 오버라이딩!
    //console.log(account)를 찍어보고 입력한 값들이 account에 출력되면 성공!!
  setAccount({
    ...account,
    [e.target.name]: e.target.value,
  });
};

//패스워드 확인
const onChangePwChk = (e) => {
  setPwChk(e.target.value);
  if(e.target.value == account.password){
    setPwChk(true);
  }
  else{
    setPwChk(false);
  }
};

  //동기식으로 로그인정보를 통신하여 출력
  const onSubmitAccount = async () => {
    try {
      const user = await fetchSignUp(account);

      // 패스워드와 패스워드 확인이 일치하는지 확인
      if (!pwChk){
        return;
      }

      // //성공하면 해당 user 아이디 패스워드값 셋팅
      // setUser(user);
      //성공하면 해당 url로 이동(main페이지로)
      history.replace("/");
    } catch (error) {

        //실패하면 throw new Error("") 값 출력
      window.alert(error);
    }
  };

  // useEffect(()=>{
  //   return onSubmitAccount;
  // })

  return (
    <Container>
        <h1>Text-to-Image 회원가입</h1>
      <Input
        id="id"
        name="id"
        placeholder="ID"
        onChange={onChangeAccount}
      />
      <button onClick={duplicateCheck}>중복 확인</button>
      <Input
        id="password"
        name="password"
        type="password"
        placeholder="Password"
        onChange={onChangeAccount}
      />
      <Input
        id="checkPassword"
        name="checkPassword"
        type="password"
        placeholder="Password 확인"
        onChange={onChangePwChk}
      />
      {
        !pwChk
        ?<div>password와 password 확인이 일치하지 않습니다.</div>
        :null
      }
      
      <Input
        id="nickname"
        name="nickname"
        type="text"
        placeholder="닉네임"
        onChange={onChangeAccount}
      ></Input>
      <Button onClick={onSubmitAccount}>회원가입</Button>
      <div>
      이미 회원이신가요?
        <Link to="/login">로그인 하러가기</Link>
      </div>
    </Container>
  );
}

// import React, { useCallback, useState, VFC } from 'react';
// import axios from 'axios';
// import useSWR from 'swr';
// // import { Success, Form, Error, Label, Input, LinkContainer, Button, Header } from './styles';
// import { Link, Navigate } from 'react-router-dom';
// import styled from "styled-components";

// const Input = styled.input`
//   position: relative;
//   overflow: hidden;
//   width: 100%;
//   height: 40px;
//   margin: 0 0 8px;
//   padding: 5px 39px 5px 11px;
//   border: solid 1px #dadada;
//   background: #fff;
//   box-sizing: border-box;
// `;

// const Button = styled.div`
//   font-size: 18px;
//   font-weight: 700;
//   line-height: 49px;
//   display: block;
//   width: 100%;
//   height: 49px;
//   margin: 16px 0 7px;
//   cursor: pointer;
//   text-align: center;
//   color: #fff;
//   border: none;
//   border-radius: 0;
//   background-color: #03c75a;
// `;

// const Label = styled.label`
//   margin-bottom: 16px;
//   & > span {
//     display: block;
//     text-align: left;
//     padding-bottom: 8px;
//     font-size: 15px;
//     cursor: pointer;
//     line-height: 1.46666667;
//     font-weight: 700;
//   }
// `;

// const Form = styled.form`
//   margin: 0 auto;
//   width: 400px;
//   max-width: 400px;
// `;


// const Header = styled.header`
//   text-align: center;
//   font-family: Slack-Larsseit, Helvetica Neue, Helvetica, Segoe UI, Tahoma, Arial, sans-serif;
//   font-weight: 700;
//   font-size: 48px;
//   line-height: 46px;
//   letter-spacing: -0.75px;
//   margin-top: 50px;
//   margin-bottom: 50px;
// `;

// const Error = styled.div`
//   color: #e01e5a;
//   margin: 8px 0 16px;
//   font-weight: bold;
// `;

// const Success = styled.div`
//   color: #2eb67d;
//   font-weight: bold;
// `;

// const LinkContainer = styled.p`
//   font-size: 13px;
//   color: #616061;
//   margin: 0 auto 8px;
//   width: 400px;
//   max-width: 400px;
//   & a {
//     color: #1264a3;
//     text-decoration: none;
//     font-weight: 700;
//     &:hover {
//       text-decoration: underline;
//     }
//   }
// `;

// const SignUp = () => {
//   const { data, error, revalidate } = useSWR('/api/users', fetcher);

//   const [uid, setUid] = useState('');
//   const [password, , setPassword] = useState('');
//   const [passwordCheck, , setPasswordCheck] = useState('');
//   const [nickname, setNickname] = useState('');
//   const [mismatchError, setMismatchError] = useState(false);
//   const [signUpError, setSignUpError] = useState('');
//   const [signUpSuccess, setSignUpSuccess] = useState(false);

//   const onChangeUid = useCallback(
//     (e) => {
//       setUid(e.target.value);
//     },
//     [passwordCheck],
//   );

//   const onChangeNickname = useCallback(
//     (e) => {
//       setNickname(e.target.value);
//     },
//     [passwordCheck],
//   );

//   const onChangePassword = useCallback(
//     (e) => {
//       setPassword(e.target.value);
//       setMismatchError(e.target.value !== passwordCheck);
//     },
//     [passwordCheck],
//   );

//   const onChangePasswordCheck = useCallback(
//     (e) => {
//       setPasswordCheck(e.target.value);
//       setMismatchError(e.target.value !== password);
//     },
//     [password],
//   );

//   const onSubmit = useCallback(
//     (e) => {
//       e.preventDefault();
//       if (!mismatchError && nickname) {
//         console.log('서버로 회원가입하기');
//         setSignUpError('');
//         setSignUpSuccess(false);
//         axios
//           .post('tmirds-1.ct5eslf4luye.ap-northeast-2.rds.amazonaws.com', {
//             uid,
//             password,
//             nickname
//           })
//           .then((response) => {
//             console.log(response);
//             setSignUpSuccess(true);
//           })
//           .catch((error) => {
//             console.log(error.response);
//             setSignUpError(error.response.data);
//           })
//           .finally(() => {});
//       }
//     },
//     [uid, nickname, password, passwordCheck, mismatchError],
//   );

//   if (data === undefined) {
//     return <div>로딩중...</div>;
//   }

//   if (data) {
//     return <Navigate to="/workspace/sleact/channel/일반" />;
//   }

//   return (
//     <div id="container">
//       <h2>Sleact</h2>
//       <Form onSubmit={onSubmit}>
//         <Label id="email-label">
//           <span>아이디</span>
//           <div>
//             <Input type="email" id="email" name="email" value={uid} onChange={onChangeUid} />
//           </div>
//         </Label>
//         <Label id="nickname-label">
//           <span>닉네임</span>
//           <div>
//             <Input type="text" id="nickname" name="nickname" value={nickname} onChange={onChangeNickname} />
//           </div>
//         </Label>
//         <Label id="password-label">
//           <span>비밀번호</span>
//           <div>
//             <Input type="password" id="password" name="password" value={password} onChange={onChangePassword} />
//           </div>
//         </Label>
//         <Label id="password-check-label">
//           <span>비밀번호 확인</span>
//           <div>
//             <Input
//               type="password"
//               id="password-check"
//               name="password-check"
//               value={passwordCheck}
//               onChange={onChangePasswordCheck}
//             />
//           </div>
//           {mismatchError && <Error>비밀번호가 일치하지 않습니다.</Error>}
//           {!nickname && <Error>닉네임을 입력해주세요.</Error>}
//           {signUpError && <Error>{signUpError}</Error>}
//           {signUpSuccess && <Success>회원가입되었습니다! 로그인해주세요.</Success>}
//         </Label>
//         <button type="submit">회원가입</button>
//       </Form>
//       <LinkContainer>
//         이미 회원이신가요?&nbsp;
//         <Link to="/login">로그인 하러가기</Link>
//       </LinkContainer>
//     </div>
//   );
// };

export default SignUp;