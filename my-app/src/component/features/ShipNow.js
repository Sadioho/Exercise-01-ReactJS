import React, { Component } from "react";
import Btn from "../common/Btn";

export default class ShipNow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      dateSelect: null,
      active: false,
    };
  }

  // khi click vao thời gian đặt hàng thì hàm này sẽ thực thi
  // gọi tới hàm pushDataTime ở Header chuyển qua set state open bằng true
  handleTimerOrder = () => {
    this.props.pushDataTime();
    this.setState({
      open: true,
    });
  };

  // KHi cick nút hẹn giờ ngay thì lấy value date và time truyền vào hàm setTextBtnShipNow
  // để set lại content hiển thị trên nút giao ngay

  clickTimer = () => {
    let elementDate = document.getElementById("date");
    let elementTime = document.getElementById("time");
    this.props.setTextBtnShipNow(elementDate.value, elementTime.value);
    if (
      elementDate.value === this.props.dateNow &&
      elementTime.value === this.props.timeNow
    ) {
      this.setState({
        open: false,
      });
    }
    this.setState({
      active: true,
    });
  };

  // Lấy date value option khi onChange vào select và setState dateSelect bằng date value
  getSelect = () => {
    let elementSelectDate = document.getElementById("date");
    this.setState({
      dateSelect: elementSelectDate.value,
    });
  };

  // Click giao ngay 

  getShipNow=()=>{
    this.props.setOpenDropDownTime()
    console.log(this.props.timeNow,this.props.dateNow);
  }

  render() {
    return (
      <div className="delivery">
        <div className="delivery__button" onClick={this.getShipNow}>
          <i className=" delivery__icon far fa-clock"></i>
          <span>GIAO NGAY</span>
          {this.state.active === false && (
            <svg
              width={20}
              height={20}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polyline
                fill="none"
                stroke="#000"
                strokeWidth="1.1"
                points="4,10 8,15 17,4"
              />
            </svg>
          )}
        </div>
        <div className={`delivery__button`} onClick={this.handleTimerOrder}>
          <i className=" delivery__icon far fa-calendar"></i>
          <span> Thời gian đặt hàng </span>
          {this.state.active === true && (
            <svg
              width={20}
              height={20}
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polyline
                fill="none"
                stroke="#000"
                strokeWidth="1.1"
                points="4,10 8,15 17,4"
              />
            </svg>
          )}
        </div>
        {this.state.open && (
          <div className="delivery__dropdown">
            <div className="delivery__dropdown-item">
              <label htmlFor="date">Ngày đặt</label>
              <select name="date" id="date" onChange={this.getSelect}>
                {this.props.dataDate.map((item, index) =>
                  item === this.props.dateNow ? (
                    this.props.dataTime.length !== 0 && (
                      <option key={index} value={item}>
                        HÔM NAY
                      </option>
                    )
                  ) : (
                    <option key={index} value={item}>
                      NGÀY {item}
                    </option>
                  )
                )}
              </select>
            </div>

            <div className="delivery__dropdown-item">
              <label htmlFor="time">Thời gian đặt</label>
              <select name="time" id="time">
                {this.state.dateSelect === null ||
                this.state.dateSelect === this.props.dateNow ? (
                  <>
                    {this.props.dataTime.length !== 0 ? (
                      <>
                        <option value={this.props.timeNow}>
                          GIAO 15-30 PHÚT
                        </option>
                        {this.props.dataTime.map((item, index) => (
                          <option key={index} value={item}>
                            {item}
                          </option>
                        ))}
                      </>
                    ) : (
                      <>
                        {this.props.dateTimeDefault.map((item, index) => (
                          <option key={index} value={item}>
                            {item}
                          </option>
                        ))}
                      </>
                    )}
                  </>
                ) : (
                  <>
                    {this.props.dateTimeDefault.map((item, index) => (
                      <option key={index} value={item}>
                        {item}
                      </option>
                    ))}
                  </>
                )}
              </select>
            </div>
            <Btn
              text="Hẹn giờ ngay"
              className="btn-orange btn-size-lager"
              onClick={this.clickTimer}
            />
          </div>
        )}
      </div>
    );
  }
}
