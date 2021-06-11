import React, { Component } from "react";
import error from "../image/search.png"
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
    let dataList = this.props.data;
    return (
      <div className="product-container">
        <SearchInput
          type="text"
          className="size-100"
          placeholder="Tìm kiếm sản phẩm"
          handleChange={(e) => this.setState({ searchField: e.target.value })}
        />
        {dataList.map((item) =>
          item.newProduct.length > 0 ? (
            <ProductList
              key={item._id}
              dataItem={item}
              dataSearch={this.state.searchField}
            ></ProductList>
          ) : null
        )}
        <div className="none-data">
          <img src={error} alt="#"/
          >
          <h1>Rất tiết chúng tôi không có sản phẩm</h1>
        </div>
      </div>
    );
  }
}
export default ProductContainer;
