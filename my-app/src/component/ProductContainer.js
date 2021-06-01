import React, { Component } from "react";

import ProductList from "./ProductList";
import SearchInput from "./SearchInput";

class ProductContainer extends Component {
  render() {
    return (
      <div className="product-container">
        <SearchInput
          type="text"
          className="size-100"
          placeholder="Tìm kiếm sản phẩm"
        />
        <ProductList dataList={this.props.data} />
      </div>
    );
  }
}
export default ProductContainer;
