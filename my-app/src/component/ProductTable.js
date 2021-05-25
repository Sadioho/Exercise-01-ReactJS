import React, { Component } from "react";
import tea from './tea.jpg';

class ProductTable extends Component {
  render() {
    return (
      <div className="product-table">
        <figure className="product-table__content">
          <img src={tea} alt="img tea"/>
          <figcaption>
            <p className="product-table__title">Trà sữa Oolong Nướng</p>
            <p className=" product-table__text">
              Đậm đà chuẩn gu - bởi trà oolong nướng đậm vị hoà cùng lớp sữa
              thơm béo. Hương vị chân ái đúng gu đậm đà - trà oolong được "sao"
              (nướng) lâu hơn cho vị đậm đà, hoà quyện với sữa thơm ngậy. Cho
              từng ngụm mát lạnh, lưu luyến vị trà sữa đậm đà mãi nơi cuống
              họng.
            </p>
            <span className="btn__price"><p className="btn__price-text">50.000 đ</p>
            <button className="btn">+</button></span>
          </figcaption>
        </figure>
      </div>
    );
  }
}
export default ProductTable;
