import React from "react";

const Image = ({ ...props }) => {
  return (
    <div className={` ${props.className}`}>
      <img src={props.src} alt={props.alt} width="80" height="80" />
    </div>
  );
};

export default Image;
