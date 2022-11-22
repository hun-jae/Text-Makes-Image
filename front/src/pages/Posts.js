import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import api from "./api";

function Post() {
  const {state} = useLocation();

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
        <img className="contentImg" src={state.url} />
        <div className="postContent">{state.text}</div>
      </div>
    </div>
  );
}

export default Post;
