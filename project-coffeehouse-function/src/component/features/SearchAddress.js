import React, { useEffect, useRef } from "react";
import Address from "../common/Address";

const SearchAddress = ({ ...props }) => {
  const { dataAddress, handleOnclick ,closeAddress} = props;
  const findAddress = useRef();
  const handleClickOutsideV2 = (event) => {
    if (findAddress.current && !findAddress.current.contains(event.target)) {
      closeAddress();
    }
    console.log("adđres", event.target);
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutsideV2);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideV2);
    };
  });
  return (
    <div className="header__address" ref={findAddress}>
      {dataAddress.length > 0 ? (
        dataAddress.map((item, index) => (
          <Address
            key={index}
            title={item.title_address}
            description={item.full_address}
            addressDesciption={() => handleOnclick(item.full_address)}
          />
        ))
      ) : (
        <Address description="Không có dữ liệu" />
      )}
    </div>
  );
};

export default SearchAddress;
