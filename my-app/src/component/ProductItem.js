import React, { Component } from "react";
import Currency from "../component/common/Currency";
import Image from "../component/common/Image";
import BtnAdd from "./common/BtnAdd";

class ProductItem extends Component {
  render() {
    return (
      <div className="product">
        <div className="product__item">
          <Image
            className="product__item-img"
            src={this.props.image}
            alt="img tea"
          />
          <div className="product__item-content">
            <p className="product__item-content-title">
              {this.props.product_name}
            </p>
            <p className=" product__item-content-text">
              {this.props.description}
            </p>
            <span className="product__item-price">
              <Currency className="size-currency-1" price={this.props.price} />
              <BtnAdd />
            </span>
          </div>
        </div>
      </div>
    );
  }
}
export default ProductItem;
