import React, { Component } from "react";

class FormCoupon extends Component {
  render() {
    return (
      <div className="coupon">
        <div className="coupon__cart">
          <a href="/#" >
            Xem giỏ hàng
          </a>
        </div>
          <div className="coupon__detail">
            <p className="coupon__detail-sum">Cộng (0 món)</p>
            <div className="coupon__detail-transport">
              <p>Vận chuyển</p>   <p>0 <span className="text-underline">đ</span> </p>
            </div>
            <form className="coupon__detail-sale">
              <input type="text" placeholder="Nhập mã ưu đãi tại đây"></input>
              <input type="submit" value="ÁP DỤNG"></input>
            </form>
          </div>
          <div className="coupon__detail-sums">
            <p>Tổng cộng</p>
            <p>0 <span className="text-underline">đ</span> </p>
          </div>
        </div>
     
    );
  }
}
export default FormCoupon;
