import React, { Component } from "react";
import { Link } from "react-scroll";
class CategoryList extends Component {
  render() {
  
  // const scroll=()=>{
  //   console.log(window.scrollY);
  // }
  // window.addEventListener('scroll',scroll)


    return (
      <ul className="category-list"> 
        {this.props.dataCategoryList.map((listItem) => (
          listItem.newProduct.length > 0 ?
          <li key={listItem.id}>
            <a
             className="category-item"
            // onClick={()=>{window.scrollTo(0,2636)}}
            >  {listItem.name}</a>
          </li> 
          : null
        ))}
      </ul>
    );
  }
}
export default CategoryList;
