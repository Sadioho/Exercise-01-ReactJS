import React, { Component } from "react";
import SearchInput from "./SearchInput";
import Image from "../common/Image";
import BtnAdd from "../common/BtnAdd";
import Btn from "../common/Btn";

export default class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      size: this.props.size,
      price_sum: this.props.price_sum,
      topping: this.props.topping,
      amount: this.props.amount,
      txtNote: this.props.txtNote,
    };
  }

  getSize = (size, price) => {
    this.setState({
      size: size,
      price_sum: price,
    });
  };

  getCheck = (data) => {
    let coppyTopping = [...this.state.topping];
    this.state.topping.includes(data.code)
      ? (coppyTopping = this.state.topping.filter(
          (item) => item !== data.code
        )) &&
        this.setState({
          topping: coppyTopping,
          price_sum: this.state.price_sum - data.price,
        })
      : coppyTopping.push(data.code) &&
        this.setState({
          topping: coppyTopping,
          price_sum: this.state.price_sum + data.price,
        });
  };

  plusAmount = () => {
    this.setState({
      amount: this.state.amount + 1,
    });
  };

  minusAmount = () => {
    if (this.state.amount > 1) {
      this.setState({
        amount: this.state.amount - 1,
      });
    }
  };

  getDataProductOrder = () => {
    let txtNote = document.getElementById("form-order").value;
 
    this.props.getDataProductOrder(
      this.state.price_sum * this.state.amount,
      this.state.amount,
      this.state.topping,
      txtNote,
      this.state.size,
      this.props.product_name,
      this.props.dataItem
    );
  };

  componentDidMount() {
    if (this.state.size === null) {
      let size = document.querySelector("input[checked]").getAttribute("id");
      if (size != null) {
        this.setState({ size: size });
      }
    }
  }

  render() {
    let { dataItem } = this.props;
    return (
      <div>
        <div className="overlay" onClick={this.props.onClick}></div>
        <div className="container_order">
          <div className="header_order">
            <Image className="product__item-img" src={this.props.src} />
            <div className="header_order_text">
              <h4>{this.props.product_name}</h4>

              {dataItem.variants.map(
                (item) =>
                  item.code === this.state.size && (
                    <h5 key={item.code}> {item.val} </h5>
                  )
              )}

              <h5>
                {dataItem.topping_list.map((item, index) =>
                  this.state.topping.includes(item.code)
                    ? item.product_name +
                      (index < this.state.topping.length - 1 ? "+" : "")
                    : null
                )}
              </h5>
            </div>
            <div className="icon-close" onClick={this.props.onClick}>
              <i className="fas fa-times"></i>
            </div>
          </div>
          <div className="body_order">
            <div className="body_order_text">
              <h5>Loại</h5>
              <h5>Size</h5>
            </div>
            <div className="check_size">
              {dataItem.variants.map((item, index) => (
                <div key={item.code} className="radio_check">
                  <input
                    defaultChecked={
                      this.state.size === item.code ? true : index === 0
                    }
                    type="radio"
                    id={item.code}
                    name="vehicle1"
                    defaultValue={item.val}
                    onClick={() => this.getSize(item.code, item.price)}
                  />
                  <label htmlFor={item.code}>
                    {`${item.val} (${item.price - dataItem.variants[0].price})`}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {dataItem.topping_list.length !== 0 && (
            <div className="body_order">
              <div className="body_order_text">
                <h5>Topping</h5>
              </div>
              <div className="check_size">
                {dataItem.topping_list.map((item) => (
                  <div key={item.code} className="radio_check">
                    <input
                      defaultChecked={this.state.topping.includes(item.code)}
                      type="checkbox"
                      id={item.code}
                      name={item.product_name}
                      defaultValue={item.product_name}
                      onClick={() => this.getCheck(item)}
                    />
                    <label htmlFor={item.code}>
                      {`${item.product_name} ( + ${item.price} ) `}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="footer_order">
            <div className="search-input">
              <i className="fas fa-pen"></i>
              <SearchInput
                type="text"
                className="size-100"
                placeholder={this.props.txtNote !== null && this.props.txtNote!=="" ? this.props.txtNote : "Ghi chú thêm" }
                id="form-order"
              />
            </div>
            <div className="footer_order_button">
              <div className="footer_order_button-amount">
                <BtnAdd className="fa fa-minus" onClick={this.minusAmount} />
                <h5>{this.state.amount}</h5>
                <BtnAdd className="fa fa-plus" onClick={this.plusAmount} />
              </div>
              <div className="footer_order_button-pay">
                <Btn
                  className="btn-orange"
                  href="/#"
                  text={`Đặt hàng  ${
                    this.state.price_sum * this.state.amount
                  } đ`}
                  onClick={this.getDataProductOrder}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
