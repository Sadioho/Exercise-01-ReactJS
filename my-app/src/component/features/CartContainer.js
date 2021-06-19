import React, { Component } from "react";
import Btn from "../common/Btn";
import Currency from "../common/Currency";
import SearchInput from "./SearchInput";

class CartContainer extends Component {
  render() {
    let { listOrder } = this.props;
    console.log(listOrder);
    return (
      <div className="coupon">
        <div className="coupon__header">
          <Btn
            href="/#"
            className="btn-orange btn-size-lager"
            text="Xem giỏ hàng"
          />
        </div>

        {listOrder!==null && (
         listOrder.map((item,index)=>
          <div className="product__detail" key={index}>
          <span className="product__detail-amount">{item.amount}</span>
          <div className="product__detail-text">
            <p className="product__detail-product_name">{item.product_name}</p>
            <p className="product__detail-size">{item.sizeChoices} {item.toppingChoices}</p>
            {/* <p className="product__detail-topping">Sayce Caramel </p> */}
            <p className="product__detail-note">{item.txtNote}</p>
          </div>
          <Currency price={item.price} />
        </div>
          )
        )}

        <div className="coupon__detail">
          <div className="coupon__detail-currency">
            <p className="coupon__detail-sum">Cộng (0 món)</p>
            <Currency price="0" />
          </div>
          <div className="coupon__detail-currency">
            <p>Vận chuyển</p>
            <Currency price="0" />
          </div>
          <form className="coupon__detail-sale">
            <SearchInput
              className="size-small"
              type="text"
              placeholder="Nhập mã ưu đãi tại đây"
            />
            <Btn href="/#" className="btn-orange btn-fix" text="  Áp dụng" />
          </form>
        </div>

        <div className="coupon__detail-currency">
          <p>Tổng cộng</p>
          <Currency className="size-currency-2" price="0" />
        </div>
      </div>
    );
  }
}
export default CartContainer;
