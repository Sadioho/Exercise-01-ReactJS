import React, { useEffect, useState } from "react";
import error from "../../image/search.png";
import SearchInput from "../common/SearchInput";
import ProductList from "./ProductList";

const ProductContainer = ({ ...props }) => {
  const [searchField, setSearchField] = useState("");
  const { data, getDataItem } = props;
  let dataList = data;
  let dataProduct = [];
  const activeCategory = (data) => {
    let unActive = document.querySelectorAll(".active-1").length;
    if (unActive > 0) {
      document.querySelector(".active-1").classList.remove("active-1");
    }
    document.getElementById("abc" + data).classList.add("active-1");
  };

  const scrollWindow = () => {
    let a = window.scrollY + 100;
    let sections = document.querySelectorAll(".product-list-item");
    sections.forEach((curent) =>
      document.getElementById(curent.id).offsetTop <= a &&
      a <=
        document.getElementById(curent.id).offsetTop +
          document.getElementById(curent.id).offsetHeight
        ? activeCategory(curent.id)
        : null
    );
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollWindow);
    return () => {
      window.removeEventListener("scroll", scrollWindow);
    };
  }, []);

  dataList.map((item) =>
    item.listProduct.length > 0 ? dataProduct.push(item.listProduct) : null
  );

  const dataProductFilter = dataProduct.map((item) =>
    item.filter((i) =>
      i.product_name.toLowerCase().includes(searchField.toLowerCase())
    )
  );

  let result = dataProductFilter.some((item) => item.length > 0);

  if (!result) {
    return (
      <div className="product-container">
        <div className="search-input">
          <i className="fas fa-search"></i>

          <SearchInput
            type="text"
            className="size-100"
            placeholder="Tìm kiếm sản phẩm"
            handleChange={(e) => setSearchField(e.target.value)}
          />
        </div>
        <div className="none-data">
          <img src={error} alt="#" />
          <h1>Rất tiết chúng tôi không có sản phẩm</h1>
        </div>
      </div>
    );
  } else
    return (
      <div className="product-container">
        <div className="search-input">
          <i className="fas fa-search"></i>

          <SearchInput
            type="text"
            className="size-100"
            placeholder="Tìm kiếm sản phẩm"
            handleChange={(e) => setSearchField(e.target.value)}
          />
        </div>
        {dataList.map((item) =>
          item.listProduct.length > 0 ? (
            <ProductList
              key={item._id}
              dataItem={item}
              dataSearch={searchField}
              id_scroll={item.id}
              getDataItem={getDataItem}
            ></ProductList>
          ) : null
        )}
      </div>
    );
};

export default ProductContainer;
