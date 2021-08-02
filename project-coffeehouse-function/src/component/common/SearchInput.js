import React from "react";

const SearchInput = ({ ...props }) => {
  return (
    <input
      className={`search__input ${props.className}`}
      type={props.type}
      placeholder={props.placeholder}
      onChange={props.handleChange}
      value={props.value}
      id={props.id}
      autoComplete="off"
      onClick={props.onClick}
      min={props.min}
      onKeyDown={props.onKeyDown}
    />
  );
};

export default SearchInput;
