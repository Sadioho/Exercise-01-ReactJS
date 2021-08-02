import React, { Component } from "react";
import Btn from "../common/Btn";
import { currentDate, currentTime, timeDefault } from "../Helpers";
import UserContext from "../Helpers/UserContext";
 
export default class ShipNow extends Component {
  static contextType=UserContext;
  constructor(props) {
    super(props);
    this.state = {
      openTimeOrder: false,
      dateSelect: null,
      active: false,
    };
    this.container = React.createRef();

  }
  handleTimerOrder = () => {
    this.setState({
      openTimeOrder: !this.state.openTimeOrder, 
    });
  };
  handleClickOutside = (event) => {
    if (
      this.container.current &&
      !this.container.current.contains(event.target)
    ) {
     this.props.setOpenDrownTime()
    }
    console.log("time",event.target);
  };
  clickTimer = () => {
    let elementDate = document.getElementById("date");
    let elementTime = document.getElementById("time");
    this.context.setTimeSetting(elementDate.value,elementTime.value);
    if(
      elementTime.value===this.context.timeNow 
      && elementDate.value===this.context.dateNow
    ){
      this.setState({
        active:false
      })
    }else{
      this.setState({
        openTimeOrder:false,
        active:true
      })
    }
  };

  getSelect = () => {
    let elementSelectDate = document.getElementById("date");
    this.setState({
      dateSelect: elementSelectDate.value,
    });
  };

  getShipNow = () => {
    this.props.setOpenDrownTime()
    this.context.setTimeSetting(this.context.dateNow, this.context.timeNow)
    
  };
  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  render() {
    let { active, dateSelect, openTimeOrder } = this.state;
    const dataDate = currentDate();
    const dataTime = currentTime();
    const dateTimeDefault=timeDefault()
    
    return (
      <div className="delivery" ref={this.container}>
        <div className="delivery__button" onClick={this.getShipNow}>
          <i className=" delivery__icon far fa-clock"></i>
          <span>GIAO NGAY</span>
          {!active && (
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
          {active === true && (
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
        {openTimeOrder && (
          <div className="delivery__dropdown">
            <div className="delivery__dropdown-item">
              <label htmlFor="date">Ngày đặt</label>
              <select name="date" id="date" onChange={this.getSelect}>
                {dataDate.map((item, index) =>
               
                  item === this.context.dateNow ? (
                    dataTime.length !== 0 && (
                   
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
                {dateSelect === null || dateSelect === this.context.dateNow ? (
                  <>
                    {dataTime.length !== 0 ? (
                      <>
                        <option value={this.context.timeNow}>GIAO 15-30 PHÚT</option>
                        {dataTime.map((item, index) => (
                          <option key={index} value={item}>
                            {item}
                          </option>
                        ))}
                      </>
                    ) : (
                      <>
                        {dateTimeDefault.map((item, index) => (
                          <option key={index} value={item}>
                            {item}
                          </option>
                        ))}
                      </>
                    )}
                  </>
                ) : (
                  <>
                    {dateTimeDefault.map((item, index) => (
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
