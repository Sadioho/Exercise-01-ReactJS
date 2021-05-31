import React, { Component } from "react";
import ProductItem from "./ProductItem";

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categorys: [],
      products: [],
    
    };
  }

  componentDidMount() {
    fetch("https://api.thecoffeehouse.com/api/v2/category/web")
      .then((response) => response.json())
      .then((categoryList) => {
        this.setState({ categorys: categoryList });
      });

    fetch("https://api.thecoffeehouse.com/api/v2/menu")
      .then((res) => res.json())
      .then((productList) => {
        this.setState(
          { products: productList.data }
        )
      });
  }

  render() {
    this.state.categorys.forEach((category) => {
      let arr = [];
      this.state.products.forEach((product) => {
        if (product.categ_id.includes(category.id)) {
          arr.push(product);
        }
      });
      category.newPro = arr;
    });

    return (
      <div>
        {this.state.categorys.map((listItem) => (
         listItem.newPro.length > 0 ? 
         <div key={listItem.id}>
         <li className="body__category-name">
           <a href="/#">{listItem.name} </a>
         </li>
         {listItem.newPro.map((item)=>
         <ProductItem 
         image={item.image}
         product_name={item.product_name}
         description={item.description}
         price={item.price}
         />
         )}
       </div> 
         : null
        ))}
      </div>
    );
  }
}
export default ProductList;
