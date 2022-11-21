import React from "react";

function Post() {
  return (
    <div>
      <style type="text/css">
        {`
        .header{
          overflow: hidden;
        }
      .contentImg{
        width:100%;
      }
    `}
      </style>
      <div>
        <img className="contentImg" src="/test_img/1.jpg" />
        <div className="postContent"></div>
      </div>
    </div>
  );
}

export default Post;
