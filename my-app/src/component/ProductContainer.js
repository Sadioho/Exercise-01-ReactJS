import React, { Component } from "react";
import SearchIcon from '../image/search.jpg';

import ProductList from "./ProductList";
import SearchInput from "./SearchInput";

class ProductContainer extends Component {
  render() {
    return (
      <div className="product-container">
        <SearchInput type="text" className="size-100" placeholder="Tìm kiếm sản phẩm"   />
        <ProductList />
      </div>
    );
  }
}
export default ProductContainer;
