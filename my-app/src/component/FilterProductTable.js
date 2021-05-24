import React, { Component } from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import CategoryRow from "./CategoryRow";

class FilterProductTable extends Component {
  render() {
    return (
      <div className="filter-product">
        <SearchBar />
        <CategoryRow heading="Phổ biến"/>
        <ProductTable />
        <ProductTable />
        <ProductTable />
        <ProductTable />
        <CategoryRow heading="Phổ biến"/>
        <ProductTable />
        <ProductTable />
        <ProductTable />

      </div>
    );
  }
}
export default FilterProductTable;
