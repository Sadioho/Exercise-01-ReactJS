import React, { Component } from "react";
import { Link } from "react-scroll";
class CategoryList extends Component {
  render() {
    return (
      <ul className="category-list">
        {this.props.dataCategoryList.map((listItem) => (
          listItem.newProduct.length > 0 ?
          <li key={listItem.id}>
            <Link
             className="category-item"
            href="/#"
            to={listItem._id}
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            >  {listItem.name}</Link>
          </li> : null
        ))}
      </ul>
    );
  }
}
export default CategoryList;
