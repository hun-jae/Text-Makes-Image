import axios from "axios";

export const duplicateCheck = async(props) => {
    const url = "tmirds-1.ct5eslf4luye.ap-northeast-2.rds.amazonaws.com";
    
    axios.get(url)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
}