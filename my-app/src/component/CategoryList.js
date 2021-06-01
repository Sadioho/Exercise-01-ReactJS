import React, { Component } from "react";

class CategoryList extends Component {
  render() {
    return (
      <ul className="category-list">
        {this.props.dataCategoryList.slice(0, 15).map((listItem) => (
          <li className="category-item" key={listItem.id}>
            <a href="/#">{listItem.name} </a>
          </li>
        ))}
      </ul>
    );
  }
}
export default CategoryList;
