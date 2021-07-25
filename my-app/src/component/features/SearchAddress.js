import React, { Component } from "react";
import Address from "../common/Address";

export default class SearchAddress extends Component {
  constructor(props) {
    super(props);
    this.findAddress = React.createRef();
  }
  handleClickOutsideV2 = (event) => {
    if (
      this.findAddress.current &&
      !this.findAddress.current.contains(event.target)
    ) {
      this.props.closeAddress();
    }
    console.log("adđres", event.target);
  };
  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutsideV2);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutsideV2);
  }
  render() {
    return (
      <div className="header__address" ref={this.findAddress}>
        {this.props.dataAddress.length > 0 ? (
          this.props.dataAddress.map((item, index) => (
            <Address
              key={index}
              title={item.title_address}
              description={item.full_address}
              addressDesciption={() =>
                this.props.handleOnclick(item.full_address)
              }
            />
          ))
        ) : (
          <Address description="Không có dữ liệu" />
        )}
      </div>
    );
  }
}
