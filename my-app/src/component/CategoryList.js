import React, { Component } from "react";

class CategoryList extends Component {
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
      <ul>
        {this.state.categorys.slice(0, 15).map((listItem) => (
          <li className="category-item" key={listItem.id}>
            <a href="/#">{listItem.name} </a>
          </li>
        ))} 
      </ul>
    );
  }
}
export default CategoryList;
