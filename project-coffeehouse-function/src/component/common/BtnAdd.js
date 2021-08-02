import React from "react";

function BtnAdd({ ...props }) {
  return (
    <button className="btnAdd" onClick={props.onClick}>
      <i className={props.className}></i>
    </button>
  );
}

export default BtnAdd;
