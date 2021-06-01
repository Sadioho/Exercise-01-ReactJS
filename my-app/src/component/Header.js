import React from "react";
import logo from "../image/logo.png";
import location from "../image/location.png";
import Btn from "../component/component-mini/Btn";
import SearchInput from "../component/SearchInput";
class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <div className="header__logo">
                <img src={logo} alt="LOGO" />
              </div>
            </div>
            <div className="col">
              <div className="header__form">
                <Btn text="Giao Ngay"></Btn>
                <SearchInput
                  src={location}
                  placeholder="Nhập địa chỉ giao hàng"
                  type="text"
                  className="size-lager"
                  class="header__form-search"
                />
              </div>
            </div>
            <div className="col">
              <Btn text="Đăng nhập"></Btn>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
