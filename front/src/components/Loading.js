import React from "react";
import { FadeLoader } from "react-spinners";

function Loading() {
  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <FadeLoader color="#ababd9" width={5} />
    </div>
  );
}

export default Loading;
