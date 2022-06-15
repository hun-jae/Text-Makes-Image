// axios 라이브러리
import axios from "axios";


export const fetchLogin = async (props) => {

  axios.get("/get/user").then(function (response) {
    response.data.map(function(el){
      if(el.uid === props.uid && el.password === props.password){
        return window.location.replace("/");
      }
    })
  
    // if(response.data[0].uid === props.uid && response.data[0].password === props.password){
    //   return window.location.replace("/");
    // }
    // else{
      // alert("Please check your ID and Password again");
      // return window.location.reload();
    // }
    // if(!login){
    //   window.alert("Please check your ID and Password again");
    // }
  });
}