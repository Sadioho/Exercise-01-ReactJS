import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import location from "../../image/location.png";
import logo from "../../image/logo.png";
import Btn from "../common/Btn";
import SearchInput from "../common/SearchInput";
import SearchAddress from "../features/SearchAddress";
import TimeShipSetting from "../features/TimeShipSetting";
import UserContext from "../Helpers/UserContext";

const Header = ({ ...props }) => {
  const [dataAddress, setdataAddress] = useState([]);
  const [searchAddress, setsearchAddress] = useState("");
  const [openDropDownTime, setopenDropDownTime] = useState(false);
  const [openDropDownAddress, setopenDropDownAddress] = useState(false);
  const contextType = useContext(UserContext);

  const handleOnclick = (value) => {
    setsearchAddress(value);
    setopenDropDownAddress(false);
  };
  const setOpenDrownTimeV2 = () => {
    setopenDropDownTime(false);
  };
  const Address = (e) => {
    fetch(
      `https://api.thecoffeehouse.com/api/v5/map/autocomplete?key=${e}&from=TCH-WEB`,
      {
        headers: {
          accept: "application/json, text/plain, */*",
          "accept-language": "en-US,en;q=0.9,ja;q=0.8",
          "cache-control": "no-cache",
          pragma: "no-cache",
          "sec-ch-ua":
            '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
          "sec-ch-ua-mobile": "?0",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "tch-app-version": "",
          "tch-device-id": "",
          "x-csrf-token": "XJVEF4AnLtZqcFJ87XeJaV1nJxGC5HrAkMy9QCHA",
          "x-requested-with": "XMLHttpRequest",
        },
        referrer: "https://order.thecoffeehouse.com/",
        referrerPolicy: "strict-origin-when-cross-origin",
        body: null,
        method: "GET",
        mode: "cors",
        credentials: "omit",
      }
    )
      .then((res) => res.json())
      .then((dataAdd) => {
        if (e.length > 3) {
          this.setState({
            dataAddress: dataAdd.addresses,
          });
        }
        // console.log(dataAdd);
      });
  };

  // debounes
  const handleChangeAddress = (e) => {
    Address(e.target.value);
    setsearchAddress(e.target.value);
    setdataAddress([]);
    setopenDropDownAddress(true);
  };

  return (
    <div className="header">
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <div className="header__logo">
              <Link to="/">
                <img src={logo} alt="LOGO" />
              </Link>
            </div>
          </div>
          <div className="col">
            <div className="header__form">
              <Btn
                className="button"
                onClick={() => setopenDropDownTime(true)}
                text={contextType.timeSetting}
              />
              {openDropDownTime && (
                <TimeShipSetting setOpenDrownTime={setOpenDrownTimeV2} />
              )}

              <div className="header__input">
                <img alt="#" className="header__icon" src={location} />
                <SearchInput
                  placeholder="Nhập địa chỉ giao hàng"
                  type="text"
                  className="size-lager input-focus"
                  handleChange={handleChangeAddress}
                  value={searchAddress}
                  onClick={() => setopenDropDownAddress(true)}
                />
                {openDropDownAddress && (
                  <SearchAddress
                    closeAddress={setopenDropDownAddress(false)}
                    handleOnclick={handleOnclick}
                    dataAddress={dataAddress}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="col btn-login">
            <Link to="/login">
              <Btn text="Đăng nhập"></Btn>
            </Link>
            {props.totalAmount > 0 && (
              <div className="total_cart">
                <p className="total_amount">{props.totalAmount}</p>
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="7.3" cy="17.3" r="1.4" />
                  <circle cx="13.3" cy="17.3" r="1.4" />
                  <polyline
                    fill="none"
                    stroke="#000"
                    points="0 2 3.2 4 5.3 12.5 16 12.5 18 6.5 8 6.5"
                  />
                </svg>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
