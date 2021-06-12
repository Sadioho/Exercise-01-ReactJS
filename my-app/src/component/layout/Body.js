import React, { Component } from "react";
import LeftContainer from "../features/LeftContainer";
import ProductContainer from "../features/ProductContainer";
import CartContainer from "../features/CartContainer";
import PlacehoderLoading from "../placehoders/PlacehoderLoading";
import NoneData from "../placehoders/NoneData";

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      listCategory: [],
      active: "",
    };
  }

  // active category
  changeActive = (id) => {
    this.setState({
      active: id,
    });
  };

//mercer data
  merge = (data1, data2) => {
    data1.map((category) => {
      let arr = [];
      data2.map((product) => {
        if (product.categ_id.includes(category.id)) {
          arr.push(product);
        }
        return arr;
      });
      category.newProduct = arr;
      return category;
    });
    return data1;
  };

  //fetch api
  componentDidMount() {
    fetch("https://api.thecoffeehouse.com/api/v2/category/web")
      .then((res) => res.json())
      .then((data1) => {
        if (data1.status_code !== 500) {
          fetch("https://api.thecoffeehouse.com/api/v2/menu")
            .then((res) => res.json())
            .then((data2) => {
              if (data2.status_code !== 500) {
                let newData = this.merge(data1, data2.data);
                this.setState({
                  listCategory: newData,
                  loading: false,
                });
              }
            });
        }
      }
      );
  }

  render() {
    return (
      <div className="body" id="body"  >
        {this.state.loading ? (
          <PlacehoderLoading></PlacehoderLoading>
        ) : this.state.listCategory.length <= 0 ? (
          <NoneData></NoneData>
        ) : (
          <div className="container">
            <div className="row">
              <div className="col-left">
                <LeftContainer  
                  dataLeft={this.state.listCategory}
                  //truyen ham qua left container
                  changeActive={this.changeActive}
                  //truyen active qua left container
                  active={this.state.active}
                />
              </div>
              <div className="col-product ">
                <ProductContainer data={this.state.listCategory} 
                  //truyen ham qua left container
                  changeActive={this.changeActive}
                  //truyen active qua left container
                  active={this.state.active}
                />
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
