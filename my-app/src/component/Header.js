import React from 'react';
import logo from '../image/logo.png';
import location from '../image/location.png';

class Header extends React.Component {
    render() {
      return(
        <div className="header">
        <img src={logo} alt="LOGO" />
        <div className="header__form">
          <a href="/#" className="header__btn" >Giao ngay</a>
          <form className="location" >
            <span className="location__img"><img src={location} alt="location"/></span>
            <input type="text" placeholder="Nhập địa chỉ giao hàng" />
          </form>
        </div>
        <a  href="/#" className="header__btn">Đăng nhập</a>
      </div>
      ) ;
    }
  }

export default Header;