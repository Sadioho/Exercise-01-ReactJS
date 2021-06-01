import React, { Component } from "react";
import ProductItem from "./ProductItem";

class ProductList extends Component {
  render() {
   
    return (
      <div>
        {this.props.dataList.map((listItem) =>
          listItem.newProduct.length > 0 ? (
            <div key={listItem._id} id={listItem._id}>
              <li className="body__category-name">
                <a href="/#" >{listItem.name} </a>
              </li>
              {listItem.newProduct.map((item) => (
                <ProductItem
                  key={item._id}
                  image={item.image}
                  product_name={item.product_name}
                  description={item.description}
                  price={item.price}
                />
              ))}
            </div>
          ) : null
        )}
      </div>
    );
  }
}
export default ProductList;
