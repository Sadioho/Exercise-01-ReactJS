import React from "react";

const Currency = ({ ...props }) => {
  return (
    <p className={`currency ${props.className}`}>
      {props.price} <span className="text-underline  ">đ</span>
    </p>
  );
};
export default Currency;
