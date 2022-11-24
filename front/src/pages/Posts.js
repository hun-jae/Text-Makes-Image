import React, { useState } from "react";
import { useLocation } from "react-router-dom";

function Posts() {
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
        <div className="sContent">{state.text}</div>
      </div>
    </div>
  );
}

export default Posts;
