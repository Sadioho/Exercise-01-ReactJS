import React, { Component } from "react";
import ProductItem from "./ProductItem";

class ProductList extends Component {
  render() {
    let { dataItem, dataSearch } = this.props;

    let filter = dataItem.newProduct.filter((item) =>
      item.product_name.toLowerCase().includes(dataSearch.toLowerCase())
    );
    if (filter.length === 0) {
      return null;
    }
    
      return (
        <div>
          <li className="body__category-name">
            <a href="/#">{dataItem.name} </a>
          </li>
          {filter.map((i) => (
            <ProductItem
              key={i._id}
              image={i.image}
              product_name={i.product_name}
              description={i.description}
              price={i.price}
            />
          ))}
        </div>
      );
    
  }
}
export default ProductList;
