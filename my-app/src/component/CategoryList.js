import React, { Component } from "react";

class CategoryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 1,
    };
  }
  scroll = (data) => {

      let elm = document.getElementById(`${data}`);
      if(elm !==null){
        elm.scrollIntoView();
        this.setState({
          active: data,
        });
      }    
  };

  render() {
    return (
      <ul className="category-list">
        {this.props.dataCategoryList.map((listItem) =>
          listItem.newProduct.length > 0 ? (
            <li
              className={this.state.active === listItem.id ? "active-1" : null}
              key={listItem.id}
              id={"abc" + listItem.id}
              onClick={() => {
                this.scroll(listItem.id);
              }}
            >
              <p className="category-item ">{listItem.name}</p>
            </li>
          ) : null
        )}
      </ul>
    );
  }
}
export default CategoryList;
