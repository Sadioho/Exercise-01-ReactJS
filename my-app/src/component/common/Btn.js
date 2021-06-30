import React, { Component } from "react";
// import Currency from "./Currency";

class Btn extends Component {
  render() {
    return (
      <button
        className={`btn ${this.props.className}`}
        onClick={this.props.onClick}
        disabled={this.props.disabled}
      >
        {this.props.text}
      </button>
    );
  }
}

export default Btn;
