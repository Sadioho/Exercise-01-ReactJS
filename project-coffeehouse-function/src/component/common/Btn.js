import React from "react";

export default function Btn({ ...props }) {
  return (
    <button
      className={`btn ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.text}
    </button>
  );
}
