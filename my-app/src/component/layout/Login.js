import React, { Component } from "react";
import Btn from "../common/Btn";
import Country from "../../image/country.png";
import SearchInput from "../features/SearchInput";
import firebase from "./firebase";
import {db,auth} from './firebase'

// Your web app's Firebase configuration

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkErr: -1,
      regis: false,
      numberPhone: null,
      codeOTP: null,
    };
  }

  componentDidMount(){
    db.collection('dataPhone').get().then(snapshot=>{
      const datas=[]
      snapshot.forEach(doc=>{
        const datass=doc.data()
        datas.push(datass)
      })
      console.log(datas);

    }).catch(error=>console.log(error))
  }


  addNewPhoneNumber=(data)=>{
    db.collection('dataPhone').add({
      phoneNumber:data,
    })
  }


  handleClick = () => {
    let recaptcha = new firebase.auth.RecaptchaVerifier("recaptcha");
    let number = `+84${this.state.numberPhone}`;
    firebase
      .auth()
      .signInWithPhoneNumber(number, recaptcha)
      .then(function (e) {
        let code = prompt("Nhập mã OTP", "");
        if (code === null) return;
        e.confirm(code)
          .then(function (result) {
            console.log(result.user.phoneNumber);
            // this.addNewPhoneNumber(result.user.phoneNumber);
            db.collection('dataPhone').add({
              phoneNumber:result.user.phoneNumber
            })
          })
          .catch(function (error) {
            console.error(error);
          });
      })
      .catch(function (error) {
        console.error(error);
      });

    
  };

  blockInvalidChar = (e) =>
    ["e", "E", "+", "-"].includes(e.key) && e.preventDefault();
  checkErr = (e) => {
    this.setState({
      numberPhone: e.target.value,
    });
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
    console.log("ANh THÁi",this.props)

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
              <img src={Country} alt="" />
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
            onClick={this.handleClick}
          ></Btn>
          <button onClick={this.addNewPhoneNumber}>ADD NEW NUMBER</button>
          <div className="check_login">
            <div id="recaptcha"></div>
            <div className="code_OTP">
              <input
                type="number"
                className="codeOTP"
                placeholder="Nhập OTP"
                name="OTP"
              />
              <button onClick={() => this.handleOTP}>SEND</button>
            </div>
          </div>

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
                <Btn text="FACEBOOK" onClick={()=>this.props.history.push("/")} className="btn-size-medium"></Btn>
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
