import React, { Component } from "react";

class CategoryList extends Component {

  scroll = (data) => {
      let elm = document.getElementById(`${data}`);
      if(elm !==null){
        elm.scrollIntoView();
      }    
      // goi ham callback tu thang leftcontainer
      this.props.changeActive(data);
  };

  render() {
    return (
      <ul className="category-list">
        {this.props.dataCategoryList.map((listItem) =>
          listItem.newProduct.length > 0 ? (
            <li
              className={this.props.active === listItem.id ? "active-1" : null}
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
