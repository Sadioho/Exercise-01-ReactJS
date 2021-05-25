import React, { Component } from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
// import CategoryRow from "./CategoryRow";

class FilterProductTable extends Component {
  render() {
    return (
      <div className="body__filter-product">
        <SearchBar />
        <ProductTable />
      </div>
    );
  }
}
export default FilterProductTable;
