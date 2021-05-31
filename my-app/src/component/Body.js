import React, { Component } from "react";
import LeftContainer from "./LeftContainer";
import ProductContainer from "./ProductContainer";
import CartContainer from "./CartContainer";

class Body extends Component {
  render() {
    return (
      <div className="body">
        <div className="container">
          <div className="row">
            <div className="col-left">
              <LeftContainer />
            </div>
            <div className="col-product ">
              <ProductContainer />
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
