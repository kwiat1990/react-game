import React from "react";

// Define functional component if doesn't have own state
export default function Square(props) {
  return (
    // Why here is no callback required on click?
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}
