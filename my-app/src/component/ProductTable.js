import React, { Component } from "react";
import tea from './tea.jpg';

class ProductTable extends Component {
  render() {
    return (
      <div className="product-table">
        <figure className="product-table-content">
          <img src={tea} alt="img tea"/>
          <figcaption>
            <p className="title-tea">Trà sữa Oolong Nướng</p>
            <p className=" product-table-text">
              Đậm đà chuẩn gu - bởi trà oolong nướng đậm vị hoà cùng lớp sữa
              thơm béo. Hương vị chân ái đúng gu đậm đà - trà oolong được "sao"
              (nướng) lâu hơn cho vị đậm đà, hoà quyện với sữa thơm ngậy. Cho
              từng ngụm mát lạnh, lưu luyến vị trà sữa đậm đà mãi nơi cuống
              họng.
            </p>
            <span className="price-button"><p className="price">50.000 đ</p>
            <button className="product-table-btn">+</button></span>
          </figcaption>
        </figure>
      </div>
    );
  }
}
export default ProductTable;
