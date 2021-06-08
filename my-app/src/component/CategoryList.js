import React, { Component } from "react";
import { Link } from "react-scroll";
class CategoryList extends Component {
  render() {
    return (
      <ul className="category-list"> 
        {this.props.dataCategoryList.map((listItem) => (
          listItem.newProduct.length > 0 ?
          <li key={listItem.id}>
            <a
             className="category-item"
            href="/#"
            >  {listItem.name}</a>
          </li> 
          : null
        ))}
      </ul>
    );
  }
}
export default CategoryList;
