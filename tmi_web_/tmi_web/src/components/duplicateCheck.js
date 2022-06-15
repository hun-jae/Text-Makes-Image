import axios from "axios";

export const duplicateCheck = async (props) => {
  axios.get("/get/user").then(function (response) {
    if(response.data[0].uid === props.uid){
      alert("Duplicated ID!");
      return window.location.reload();
    }
    else{
      alert("You can use this ID");
    }
  });
};
