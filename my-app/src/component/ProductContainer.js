import React, { Component } from "react";

import ProductList from "./ProductList";
import SearchInput from "./SearchInput";

class ProductContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchField: "",
    };
  }

  render() {
    let dataList=this.props.data;
    return (
      <div className="product-container">
        <SearchInput
          type="text"
          className="size-100"
          placeholder="Tìm kiếm sản phẩm"
          handleChange={(e) => this.setState({ searchField: e.target.value })}
        />
          {
            dataList.map((item)=>
              item.newProduct.length > 0 ? <ProductList key={item._id} dataItem={item} dataSearch={this.state.searchField}></ProductList> : null 
            )
          }
      </div>
    );
  }
}
export default ProductContainer;
