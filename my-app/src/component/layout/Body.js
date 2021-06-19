import React, { Component } from "react";
import LeftContainer from "../features/LeftContainer";
import ProductContainer from "../features/ProductContainer";
import CartContainer from "../features/CartContainer";
import PlacehoderLoading from "../placehoders/PlacehoderLoading";
import NoneData from "../placehoders/NoneData";
import Order from "../features/Order";

class Body extends Component {
  constructor(props) {
    super(props);
    this.container = React.createRef();
    this.state = {
      loading: true,
      listCategory: [],
      active: null,
      dataItem: null,
      layoutOrder: false,
      listOrder: null,
    };
  } 

  // active category
  changeActive = (id) => {
    this.setState({
      active: id,
    });
  };

  // get dataitem
  getDataItem = (data) => {
    this.setState({
      dataItem: data,
      layoutOrder: true,
    });
  };

  // event ref

  //merger data
  merge = (data1, data2) => {
    data1.map((category) => {
      let arr = [];
      data2.map((product) => {
        if (product.categ_id.includes(category.id)) {
          arr.push(product);
        }
        return arr;
      });
      category.listProduct = arr;
      return category;
    });
    return data1;
  };

  // fetch api
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
                  active: newData[0].id,
                });
              }
            });
        }
      });
  }

  pushPriceSum = (price, amount, toppingChoices, txtNote, sizeChoices,product_name) => {
    let obj = {
      product_name:product_name,
      price: price,
      amount: amount,
      toppingChoices: toppingChoices,
      txtNote: txtNote,
      sizeChoices: sizeChoices,
    };
    let arr = [];
    arr.push(obj);
    this.setState({
      listOrder:arr
    })
   
  };

  render() {
    return (
      <div className="body" id="body">
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
                  changeActive={this.changeActive}
                  active={this.state.active}
                />
              </div>
              <div className="col-product ">
                <ProductContainer
                  data={this.state.listCategory}
                  changeActive={this.changeActive}
                  active={this.state.active}
                  //
                  getDataItem={this.getDataItem}
                />
              </div>
              <div className="col-right">
                <CartContainer listOrder={this.state.listOrder} />
              </div>
            </div>
          </div>
        )}
        {this.state.layoutOrder &&(
          <Order
            src={this.state.dataItem.image}
            product_name={this.state.dataItem.product_name}
            onClick={() => this.setState({ layoutOrder: false })}
            dataItem={this.state.dataItem}
            pushPriceSum={this.pushPriceSum}
          />
        ) }
      </div>
    );
  }
}
export default Body;
