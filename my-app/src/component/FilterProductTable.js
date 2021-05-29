import React, { Component } from "react";
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

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
