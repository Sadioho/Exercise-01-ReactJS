import React, { Component } from "react";
import SearchInput from "./SearchInput";
import Image from "../common/Image";
import BtnAdd from "../common/BtnAdd";
import Btn from "../common/Btn";

export default class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      size: this.props.dataItem.variants[0].val,
      price_sum: this.props.dataItem.variants[0].price,
      topping: "",
      amount:1
    };
  }

  getSize = (size, price) => {
    this.setState({
      size: size,
      price_sum: price,
    });
  };

  getCheck = (data) => {
    let check = document.getElementById(data.code);
    if (check.checked) {
      this.setState({
        price_sum: this.state.price_sum + data.price,
        topping: this.state.topping.concat(` ${data.product_name} +`),
      });
    } else {
      this.setState({
        price_sum: this.state.price_sum - data.price,
        topping: this.state.topping.replace(` ${data.product_name} +`, ""),
      });
    }
  };


  plusAmount=()=>{
    this.setState({
      amount: this.state.amount + 1
    })
  }

  minusAmount=()=>{
    if(this.state.amount >1){
      this.setState({
        amount: this.state.amount - 1
      })
    }
  }

  componentDidMount() {
    let a = document.querySelector("input[name='vehicle1']");
    if (a !== null) {
      a.setAttribute("checked", "checked");
    }
  }
  
  render() {
    let dataItem = this.props.dataItem;
    return (
      <div>
        <div className="overlay" onClick={this.props.onClick}></div>
        <div className="container_order">
          <div className="header_order">
            <Image className="product__item-img" src={this.props.src} />
            <div className="header_order_text">
              <h4>{this.props.product_name}</h4>
              <h5>{this.state.size}</h5>
              <h5>{this.state.topping.slice(0, -2)}</h5>
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
              {dataItem.variants.map((item) => (
                <div key={item.code} className="radio_check">
                  <input
                    type="radio"
                    id={item.code}
                    name="vehicle1"
                    defaultValue={item.val}
                    onClick={() => this.getSize(item.val, item.price)}
                  />
                  <label htmlFor={item.code}>
                    {`${item.val} (${
                      item.price - dataItem.variants[0].price
                    })`}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {dataItem.topping_list.length !== 0 ? (
            <div className="body_order">
              <div className="body_order_text">
                <h5>Topping</h5>
              </div>
              <div className="check_size">
                {dataItem.topping_list.map((item) => (
                  <div key={item.code} className="radio_check" >
                    <input
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
          ) : null}

          <div className="footer_order">
            <div className="search-input">
              <i className="fas fa-pen"></i>
              <SearchInput
                type="text"
                className="size-100"
                placeholder="Ghi chú thêm"
              />
            </div>
            <div className="footer_order_button">
              <div className="footer_order_button-amount">
                <BtnAdd className="fa fa-minus" onClick={this.minusAmount}/>
                <h5>{this.state.amount}</h5>
                <BtnAdd className="fa fa-plus" onClick={this.plusAmount}/>
              </div>
              <div className="footer_order_button-pay">
                <Btn
                  className="btn-orange"
                  href='/#'
                  text={`Đặt hàng  ${this.state.price_sum * this.state.amount} đ`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
