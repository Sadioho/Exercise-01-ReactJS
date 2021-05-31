import React, { Component } from "react";
import CategoryList from "./CategoryList";

class LeftContainer extends Component {
  render() {
    return (
      <div className="left-container">
        <ul className="category-list">
          <CategoryList />
        </ul>
      </div>
    );
  }
}
export default LeftContainer;
