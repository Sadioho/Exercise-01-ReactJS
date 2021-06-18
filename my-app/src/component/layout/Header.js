import React from "react";
import logo from "../../image/logo.png";
import location from "../../image/location.png";
import Btn from "../common/Btn";
import SearchInput from "../features/SearchInput";
import Address from "../common/Address";
import ShipNow from "../features/ShipNow";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataAddress: [],
      searchAddress: "",
      openDropDownTime: false,
      textBtnShipNow: "Giao Ngay",
      timeNow: null, // thời gian hiện tại
      dateNow: null, // ngày hiện tại
      dataDate: [], // lưu ngày tiếp theo
      dataTime: [], // lưu thời gian ngày hiện tại kể từ giờ hiện tại
      dateTimeDefault: [],
    };
    this.container = React.createRef();
  }

  // xử lý onchang địa chỉ
  handleChangeAddress = (e) => {
    this.setState({ searchAddress: e.target.value, dataAddress: [] });
    this.Address(e);
  };
  // lấy dữ liệu trả về lại cho input địa chỉ
  handleOnclick = (value) => {
    this.setState({
      searchAddress: value,
    });
  };
  // get address từ API
  Address = (e) => {
    fetch(
      `https://order.thecoffeehouse.com/api/location?address=${e.target.value}`
    )
      .then((res) => res.json())
      .then((dataAdd) => {
        if (dataAdd.status === "OK") {
          if (e.target.value.length > 3) {
            this.setState({
              dataAddress: dataAdd.predictions,
            });
          }
        }
      });
  };

  // click btn giao ngay hiển thị dropdow chọn thời gian giao
  handleOpenDropDown = () => {
    this.setState((state) => {
      return {
        openDropDownTime: !state.openDropDownTime,
      };
    });
  };

  // Click ngoài màn hình thì tắt đi cái dropdown giao hàng
  handleClickOutside = (event) => {
    if (
      this.container.current &&
      !this.container.current.contains(event.target)
    ) {
      this.setState({
        openDropDownTime: false,
      });
    }
  };

  // set state dataDate bằng ngày bắt đầu và 2 ngày tiếp theo
  pushDataDate = () => {
    let arr = [];
    let dayNow = new Date();
    let nextDay = new Date();
    for (let i = 0; i < 3; i++) {
      nextDay.setDate(dayNow.getDate() + i);
      arr.push(nextDay.toLocaleDateString("en-GB"));
    }
    this.setState({
      dataDate: arr,
    });
  };

  //set state datatiem bằng thời gian hiện tại cho đến 8h30 của ngày hiện tại
  pushDataTime = () => {
    let timeStart = new Date();
    let timeEnd = new Date();
    let arrTime = [];
    timeStart.setMinutes(timeStart.getMinutes() + 60 - timeStart.getMinutes());
    timeEnd.setHours(20);
    timeEnd.setMinutes(30);
    for (
      timeStart;
      timeStart <= timeEnd;
      timeStart.setMinutes(timeStart.getMinutes() + 15)
    ) {
      arrTime.push(
        timeStart.toLocaleTimeString("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    }
    this.setState({
      dataTime: arrTime,
    });
  };

  //set content btn giao ngay
  setTextBtnShipNow = (date, time) => {
    if (time === this.state.timeNow && date === this.state.dateNow) {
      this.setState({
        textBtnShipNow: "GIAO NGAY",
      });
    } else {
      this.setState({
        textBtnShipNow: `${date}  ${time}`,
      });
    }
  };

  setDateTimeDefault = () => {
    let timeStart = new Date();
    let timeEnd = new Date();
    let arrTime = [];
    timeEnd.setHours(20);
    timeEnd.setMinutes(30);
    timeStart.setHours(7);
    timeStart.setMinutes(30);
    for (
      timeStart;
      timeStart <= timeEnd;
      timeStart.setMinutes(timeStart.getMinutes() + 30)
    ) {
      arrTime.push(
        timeStart.toLocaleTimeString("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    }
    this.setState({
      dateTimeDefault: arrTime,
    });
  };

  setOpenDropDownTime=()=>{
    this.setState({
      openDropDownTime:false,
      textBtnShipNow:"GIAO NGAY"
    })
  }

  // chạy hàm pushdatadate lắng nghe sự kiện mousedown gọi gới hàm handleClickoutside
  // set state ngày hiện tại và giờ hiện tại
  componentDidMount() {
    this.setDateTimeDefault();
    this.pushDataDate();
    document.addEventListener("mousedown", this.handleClickOutside);
    let dateTime = new Date();
    let time = dateTime.toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
    });
    let dateNow = dateTime.toLocaleDateString("en-GB");
    this.setState({
      timeNow: time,
      dateNow: dateNow,
    });
  }
  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }


  render() {
    let { dataAddress } = this.state;

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
              <div className="header__form" ref={this.container}>
                <Btn
                  className="button"
                  onClick={this.handleOpenDropDown}
                  text={this.state.textBtnShipNow}
                />
                {this.state.openDropDownTime && (
                  <ShipNow
                    setTextBtnShipNow={this.setTextBtnShipNow}
                    textBtnShipNow={this.state.textBtnShipNow}
                    dateNow={this.state.dateNow}
                    timeNow={this.state.timeNow}
                    dataDate={this.state.dataDate}
                    dataTime={this.state.dataTime}
                    pushDataTime={this.pushDataTime}
                    dateTimeDefault={this.state.dateTimeDefault}
                    setOpenDropDownTime={this.setOpenDropDownTime}
                  />
                )}

                <div className="header__input">
                  <img alt="#" className="header__icon" src={location} />
                  <SearchInput
                    placeholder="Nhập địa chỉ giao hàng"
                    type="text"
                    className="size-lager input-focus"
                    handleChange={this.handleChangeAddress}
                    value={this.state.searchAddress}
                  />

                  <div className="header__address ">
                    {this.state.searchAddress.length !== 0 ? (
                      dataAddress.length > 0 ? (
                        dataAddress.map((item) => (
                          <Address
                            title={item.structured_formatting.main_text}
                            description={item.description}
                            key={item.id}
                            addressDesciption={() =>
                              this.handleOnclick(item.description)
                            }
                          />
                        ))
                      ) : (
                        <Address description="Không có dữ liệu" />
                      )
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <Btn href="/#" text="Đăng nhập"></Btn>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
