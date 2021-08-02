import logo from "../../image/location.png";

import React from "react";

const Address = ({ ...props }) => {
  return (
    <div className="header__address-content" onClick={props.addressDesciption}>
      <div className="header__address-icon">
        <img src={logo} alt="LOGO" />
      </div>
      <div className="header__address-text">
        <p>{props.title}</p>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default Address;
