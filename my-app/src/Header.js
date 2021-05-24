import React from 'react';
import './header.css';
import logo from './logo.png';

class Header extends React.Component {
    render() {
      return(
        <div className="header">
        <img src={logo} alt="LOGO" />
        <div className="header__form">
          <a className="btn" href="#">Giao ngay</a>
          <form action="#">
            <input type="text" placeholder="Nhập địa chỉ giao hàng" />
          </form>
        </div>
        <a className="btn" href="#">Đăng nhập</a>
      </div>
      ) ;
    }
  }

export default Header;