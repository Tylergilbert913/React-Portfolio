import React from "react";

function row(props) {
  return <div className={`row${props.fluid ? "-fluid" : ""}`}>{props.children}</div>;
}

export default row;