import React, { Component } from "react";
class ProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    fetch("https://api.thecoffeehouse.com/api/v2/menu")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            items: result.data,
          });
        },
      );
  }

  render() {
    return (
      <div>
        {this.state.items.map((item) => (
         
          <div className="product-table" key={item._id}>
            <figure className="product-table__content">
              <img src={item.image} alt="img tea" />
              <figcaption>
                <p className="product-table__title">{item.product_name}</p>
                <p className=" product-table__text">
                 {item.description}
                </p>
                <span className="btn__price">
                  <p className="btn__price-text">{item.price} đ</p>
                  <button className="btn">+</button>
                </span>
              </figcaption>
            </figure>
          </div>
        ))}
      </div>
    );
  }

}
export default ProductTable;
