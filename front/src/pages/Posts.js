import React from "react";
import { useLocation } from "react-router-dom";
import ControlledCarousel from "../components/ControlledCarousel";

function Posts() {
  const { state } = useLocation();

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
        <ControlledCarousel data={state.data} uid={state.uid} />
      </div>
    </div>
  );
}

export default Posts;
