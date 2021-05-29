import React, { Component } from "react";
import ProductRow from "./ProductRow";

class ProductTable extends Component {
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
      <div>
        {this.state.categorys.map((listItem) => (
          <div key={listItem.id}>
            <li className="body__category-name">
              <a href="/#">{listItem.name} </a>
            </li>
            <ProductRow categoryId={listItem.id} />{" "}
          </div>
        ))}
      </div>
    );
  }
}
export default ProductTable;
