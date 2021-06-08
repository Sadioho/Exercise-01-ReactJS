import React, { Component } from "react";

class SearchInput extends Component {
  render() {
    return (
      <div className={`search  ${this.props.class}`}>
        <span className="search__icon">
          <img src={this.props.src} alt={this.props.alt} />
        </span>
        <input
          className={`search__input ${this.props.className}`}
          type={this.props.type}
          placeholder={this.props.placeholder}
          onChange={this.props.handleChange}
        />
      </div>
    );
  }
}
export default SearchInput;
