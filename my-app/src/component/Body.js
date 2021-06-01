import React, { Component } from "react";
import LeftContainer from "./LeftContainer";
import ProductContainer from "./ProductContainer";
import CartContainer from "./CartContainer";

class Body extends Component {
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
        this.setState({ products: productList.data });
      });
  }

  render() {

    this.state.categorys.map((category) => {
      let arr = [];
      this.state.products.map((product) => {
        if (product.categ_id.includes(category.id)) {
          arr.push(product);
        }
        return arr;
      });
      category.newProduct = arr;
      return arr;
    });
    console.log(this.state.categorys);
    return (
      <div className="body">
        <div className="container">
          <div className="row">
            <div className="col-left">
              <LeftContainer dataLeft={this.state.categorys} />
            </div>
            <div className="col-product ">
              <ProductContainer data={this.state.categorys} />
            </div>
            <div className="col-right">
              <CartContainer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Body;
