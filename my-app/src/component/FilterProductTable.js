import React, { Component } from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

class FilterProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categorys: [],
    };
  }

  componentDidMount() {
    fetch("https://api.thecoffeehouse.com/api/v2/category/web")
      .then((response) => response.json())
      .then((categoryList) => {
        this.setState({ categorys: categoryList });
      });
  }

  render() {
    return (
      <div className="body__filter-product">
        <SearchBar />
        {this.state.categorys.map((listItem) => (
          <div>
            <li className="body__category-name" key={listItem.id}>
              <a href="/#">{listItem.name} </a>
            </li>
            <ProductTable categoryId={listItem.id} /> 
          </div>
        ))}
      </div>
    );
  }
}
export default FilterProductTable;
