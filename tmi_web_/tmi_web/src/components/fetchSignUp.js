// //동기식 방식 ( async await 사용!!!!!)
// export const fetchSignUp = async ({ id, password, nickname }) => {
//     const response = await fetch("http://localhost:8888/users");
  
//     if (response.ok) {
//         //서버 통신 성공
//       const users = await response.json();
  
//       //users안 객체들을 순회하면서 그 객체들의 id값과 form 컴포넌트에서 받음 account의 id값과 비교
//       //서로 일치하는 것만 user에 대입
//       const user = users.find((user) => user.id === id);
//       // user id가 이미 존재한다면 해당 에러 생성
//       if (user.id === id) {
//         throw new Error("이미 존재하는 아이디입니다.");
//       }
  
//       //모든게 일치하면 그 user 정보 return -> 이 return값이 form 컴포넌트 내 fetchLogin 함수 값으로 출력되는것
//       //form 컴포넌트에서 setUser값에 넣어야함
//       return user;
//     }

//     // 서버 통신 실패
//     throw new Error("서버 통신이 원활하지 않습니다.");
//   };


// axios 라이브러리
import axios from "axios";

export const fetchSignUp = async(props) => {
    const url = "tmirds-1.ct5eslf4luye.ap-northeast-2.rds.amazonaws.com";
    
    axios.post(url, {
        id: props.id,
        password: props.password,
        nickname: props.nickname
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
}