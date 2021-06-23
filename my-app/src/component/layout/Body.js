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
      listOrder: [],

      size: null,
      price_sum: null,
      topping: [],
      amount: 1,
      txtNote: null,
      indexProductOrder: -1,
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
      price_sum: data.price,
      size: null,
      topping: [],
      amount: 1,
      dataItem: data,
      txtNote: null,
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

  getDataProductOrder = (
    price,
    amount,
    toppingChoices,
    txtNote,
    sizeChoices,
    product_name,
    item
  ) => {
    let listOrder = this.state.listOrder;
    let obj = {
      product_name: product_name,
      price: price,
      amount: amount,
      toppingChoices: toppingChoices,
      txtNote: txtNote,
      sizeChoices: sizeChoices,
      product_item: item,
    };

    if (listOrder.length === 0) {
      this.setState({
        listOrder: [...this.state.listOrder, obj],
      });
    } else {
      if (this.state.indexProductOrder === -1) {
        let flag = 1;
        listOrder.map((item) =>
          item.product_name === product_name &&
          JSON.stringify(item.toppingChoices) === JSON.stringify(toppingChoices) &&
          item.sizeChoices === sizeChoices 
            ? ((item.amount += amount), (item.price += price), (flag *= -1))
            : (flag *= 1)
        );
        if (flag === 1) {
          this.setState({
            listOrder: [...this.state.listOrder, obj],
          });
        }
      } else {
        listOrder.map((item, index) =>
          item.product_name === product_name &&
          index === this.state.indexProductOrder
            ? ((item.amount = amount),
              (item.price = price),
              (item.sizeChoices = sizeChoices),
              (item.toppingChoices = toppingChoices),
              (item.txtNote=txtNote),
              this.setState({
                indexProductOrder:-1
              })
              )
            : null
        );
      }
    }
    this.setState({
      layoutOrder: false,
    });
  };
  //edit cart

  editDataProduct = (item, index) => {
    this.setState({
      dataItem: item.product_item,
      layoutOrder: true,
      size: item.sizeChoices,
      price_sum: item.price / item.amount,
      amount: item.amount,
      topping: item.toppingChoices,
      txtNote: item.txtNote,
      indexProductOrder: index,
    });
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
                  getDataItem={this.getDataItem}
                />
              </div>
              <div className="col-right">
                <CartContainer
                  listOrder={this.state.listOrder}
                  editDataProduct={this.editDataProduct}
                  dataItem={this.state.dataItem}
                />
              </div>
            </div>
          </div>
        )}
        {this.state.layoutOrder && (
          <Order
            src={this.state.dataItem.image}
            product_name={this.state.dataItem.product_name}
            onClick={() => this.setState({ layoutOrder: false })}
            dataItem={this.state.dataItem}
            getDataProductOrder={this.getDataProductOrder}
            dataEdit={this.state.dataEdit}
            //props
            size={this.state.size}
            price_sum={this.state.price_sum}
            topping={this.state.topping}
            amount={this.state.amount}
            txtNote={this.state.txtNote}
          />
        )}
      </div>
    );
  }
}
export default Body;
