import React, { Component } from "react";
import LeftContainer from "./LeftContainer";
import ProductContainer from "./ProductContainer";
import CartContainer from "./CartContainer";
import PlacehoderLoading from "./placehoders/PlacehoderLoading";
import NoneData from "./placehoders/NoneData";

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      listCategory: [],
    };
  }

  merge = (data1, data2) => {
    data1.map((category) => {
      let arr = [];
      data2.map((product) => {
        if (product.categ_id.includes(category.id)) {
          arr.push(product);
        }
      });
      category.newProduct = arr;
    });
    return data1;
  };

  componentDidMount() {
    fetch("https://api.thecoffeehouse.com/api/v2/category/web")
      .then((res) => res.json())
      .then((data1) => {
        fetch("https://api.thecoffeehouse.com/api/v2/menu")
          .then((res) => res.json())
          .then((data2) => {
            let newData = this.merge(data1, data2.data);
            // console.log(newData);
            this.setState({
              listCategory: newData,
              loading: false,
            });
          });
      });
  }

  render() {
    // console.log(this.state.listCategory);

    return (
      <div className="body">
        {this.state.loading ? (
          <PlacehoderLoading></PlacehoderLoading>
        ) : this.state.listCategory.length <= 0 ? (
          <NoneData></NoneData>
        ) : (
          <div className="container">
            <div className="row">
              <div className="col-left">
                <LeftContainer dataLeft={this.state.listCategory}/>
              </div>
              <div className="col-product ">
                <ProductContainer data={this.state.listCategory}/>
              </div>
              <div className="col-right">
                <CartContainer />
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
export default Body;
