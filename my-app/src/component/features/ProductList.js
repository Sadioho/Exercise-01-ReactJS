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
      <div className="product-list-item">
        <li className="body__category-name" id={dataItem.id}>
          <a  href="/#">{dataItem.name} </a>
        </li>
        {filter.map((item) => (
          <ProductItem
            key={item._id}
            image={item.image}
            product_name={item.product_name}
            description={item.description}
            price={item.price}
          />
        ))}
      </div>
    );
  }
}
export default ProductList;
