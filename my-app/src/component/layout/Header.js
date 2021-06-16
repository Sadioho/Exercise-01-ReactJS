import React from "react";
import logo from "../../image/logo.png";
import location from "../../image/location.png";
import Btn from "../common/Btn";
import SearchInput from "../features/SearchInput";
import Address from "../common/Address";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataAddress: [],
      searchAddress: "",
    };
  }
  handleChange = (e) => {
      this.setState({ searchAddress: e.target.value, dataAddress: [] });
      this.Address(e);
  };



  Address = (e) => {
    fetch(
      `https://order.thecoffeehouse.com/api/location?address=${e.target.value}`
    )
      .then((res) => res.json())
      .then((dataAdd) => {
        if (dataAdd.status === "OK") {
            if(e.target.value.length>3){
              this.setState({
                dataAddress: dataAdd.predictions,
              });
            }
        }
      });
  };

  handleOnclick = (value) => {
    this.setState({
      searchAddress: value,
    });
  };

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
              <div className="header__form">
                <Btn text="Giao Ngay"></Btn>
                <div className="header__input">
                  <img alt="#" className="header__icon" src={location} />
                  <SearchInput
                    placeholder="Nhập địa chỉ giao hàng"
                    type="text"
                    className="size-lager input-focus"
                    handleChange={this.handleChange}
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
              <Btn text="Đăng nhập"></Btn>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
