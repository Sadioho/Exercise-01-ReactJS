import React, { Component } from "react";
import Btn from "../component/component-mini/Btn";
import Currency from "../component/component-mini/Currency";
import SearchInput from "../component/SearchInput";

class CartContainer extends Component {
  render() {
    return (
      <div className="coupon">
        <div className="coupon__header">
          <Btn className="btn-orange btn-size-lager" text="Xem giỏ hàng" />
        </div>

        <div className="coupon__detail">
          <p className="coupon__detail-sum">Cộng (0 món)</p>
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
            <Btn className="btn-orange btn-fix" text="  Áp dụng" />
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
