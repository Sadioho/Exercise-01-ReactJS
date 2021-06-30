import React, { Component } from "react";
import Btn from "../common/Btn";
import Country from "../../image/country.png"
import SearchInput from "../features/SearchInput";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkErr: -1,
      regis: false,
    };
  }
  blockInvalidChar = (e) =>
    ["e", "E", "+", "-"].includes(e.key) && e.preventDefault();
  checkErr = (e) => {
    console.log(e.target.value);
    let number = e.target.value;
    if (!isNaN(number) && number.length >= 9 && number.length <= 11) {
      this.setState({
        checkErr: 0,
      });
    } else {
      if (number.length <= 0) {
        this.setState({
          checkErr: 1,
        });
      } else if (number.length >= 1) {
        this.setState({
          checkErr: 2,
        });
      }
    }
  };
  regis = () => {
    this.setState((state) => {
      return {
        regis: !state.regis,
      };
    });
  };
  render() {
    return (
      <div className="login">
        <div className="form">
          <p className="form__title">
            {this.state.regis ? <>Chào Bạn,</> : <> Đăng Nhập</>}
          </p>
          {this.state.regis && (
            <p className="form__regOr">Nhập số điện thoại để tiếp tục</p>
          )}
          <div className="form__content">
            <div className="form__content_img">
              <img
                src={Country}
                alt=""
              />
            </div>
            <div className="form__content_option">
              <select>
                <option value="+84"> +84</option>
              </select>
            </div>
            <SearchInput
              className="form__content_number"
              placeholder="Nhập số điện thoại của bạn"
              handleChange={this.checkErr}
              type="number"
              min="0"
              onKeyDown={this.blockInvalidChar}
            ></SearchInput>
          </div>
          <div className="form__checkErr">
            {this.state.checkErr === 1 ? (
              <p className="form__textErr">Không được để trống trường này</p>
            ) : (
              this.state.checkErr === 2 && (
                <p className="form__textErr">
                  Giá trị nằm trong khoảng 9-10 số
                </p>
              )
            )}
          </div>

          <Btn
            text={this.state.regis ? "TIẾP TỤC " : "ĐĂNG NHẬP"}
            className="form__button btn-size-lager"
            disabled={this.state.checkErr === 0 ? false : true}
          ></Btn>
          <p className="form__regNew" onClick={this.regis}>
            {this.state.regis ? (
              <span className="active-blue"> Quay lại </span>
            ) : (
              <> Đăng ký thành viên mới ?</>
            )}
          </p>
          {!this.state.regis && (
            <>
              <p className="form__regOr">hoặc đăng nhập bằng</p>
              <div className="form__btn">
                <Btn text="FACEBOOK" className="btn-size-medium"></Btn>
                <Btn text="EMAIL" className="btn-size-medium"></Btn>
              </div>
            </>
          )}
        </div>
      </div>
    );
  }
}

export default Login;
