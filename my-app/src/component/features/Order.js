import React, { Component } from "react";
import SearchInput from "./SearchInput";
import Image from "../common/Image";
import BtnAdd from "../common/BtnAdd";
import Btn from "../common/Btn";

export default class Order extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     size: null,
  //     price_sum: this.props.dataItem.variants[0].price,
  //     topping: [],
  //     amount: 1,
  //   };
  // }

  // getSize = (size, price) => {
  //   this.setState({
  //     size: size,
  //     price_sum: price,
  //   });
  // };

  // getCheck = (data) => {
  //   // let check = document.getElementById(data.code);
  //   let coppyTopping = [...this.state.topping];

  //   this.state.topping.includes(data.code)
  //   ? (coppyTopping = this.state.topping.filter(
  //       (item) => item !== data.code
  //     )) &&
  //     this.setState({
  //       topping: coppyTopping,
  //       price_sum: this.state.price_sum - data.price,
  //     })
  //   : coppyTopping.push(data.code) &&
  //     this.setState({
  //       topping: coppyTopping,
  //       price_sum: this.state.price_sum + data.price,
  // });
  // };

  // plusAmount = () => {
  //   this.setState({
  //     amount: this.state.amount + 1,
  //   });
  // };

  // minusAmount = () => {
  //   if (this.state.amount > 1) {
  //     this.setState({
  //       amount: this.state.amount - 1,
  //     });
  //   }
  // };

  componentDidMount() {
    // let a = document.querySelector("input[checked]").getAttribute("id");
    // if (a !== null) {
    //  this.props.getSize(a,this.props.price_new)
    // }

    if(this.props.sizeActive===null){
      let a = document.querySelector("input[checked]").getAttribute("id");
      if (a !== null) {
       this.props.getSize(a,this.props.price_new)
      }
    }

    
  }

  // addToCartV2 = () => {
  //   let txtNote = document.getElementById("form-order").value;
  //   const objCart = {
  //     ...this.props.dataItem,
  //     price_sum: this.state.price_sum * this.state.amount,
  //     amount: this.state.amount,
  //     topping: this.state.topping,
  //     txtNote: txtNote,
  //     size: this.state.size,
  //   };
  //   this.props.addToCart(objCart);
  // };

  //edit cart

  render() {
    
    let {
      dataItem,
      addToCartV2,
      getSize,
      getCheck,
      plusAmount,
      minusAmount,
      sizeActive,
      price_new,
      toppingActive,
      amount,
      onClick,
      src,
      product_name,
      
    } = this.props;
    // console.log(dataItem);
    return (
      <div>
        <div className="overlay" onClick={onClick}></div>
        <div className="container_order">
          <div className="header_order">
            <Image className="product__item-img" src={src} />
            <div className="header_order_text">
              <h4>{product_name}</h4>
              <h5>
                {dataItem.variants.map(
                  (item) => item.code === sizeActive && item.val 
                )}
              </h5>
              <h5>
                {dataItem.topping_list.map((item, index) =>
                 toppingActive.includes(item.code)
                    ? item.product_name +
                      (index < toppingActive.length - 1 ? "+" : "")
                    : null
                )}
              </h5>
            </div>
            <div className="icon-close" onClick={onClick}>
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
                      sizeActive === item.code ? true : index === 0
                    }
                    type="radio"
                    id={item.code}
                    name="vehicle1"
                    defaultValue={item.val}
                    onClick={() => getSize(item.code, item.price)}
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
                      defaultChecked={toppingActive.includes(item.code)}
                      type="checkbox"
                      id={item.code}
                      name={item.product_name}
                      defaultValue={item.product_name}
                      onClick={() => getCheck(item)}
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
                placeholder="Ghi chú thêm"
                id="form-order"
              />
            </div>
            <div className="footer_order_button">
              <div className="footer_order_button-amount">
                <BtnAdd className="fa fa-minus" onClick={minusAmount} />
                <h5>{amount}</h5>
                <BtnAdd className="fa fa-plus" onClick={plusAmount} />
              </div>
              <div className="footer_order_button-pay">
                <Btn
                  className="btn-orange"
                  href="/#"
                  text={`Đặt hàng  ${
                  ( price_new * amount).toLocaleString()
                  } đ`}
                  onClick={addToCartV2}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
