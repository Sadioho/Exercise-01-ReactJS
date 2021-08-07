
import React from 'react';
import ProductItem from "./ProductItem";

const ProductList = ({ ...props }) => {
  let { dataItem, dataSearch } = props;
  let filter = dataItem.listProduct.filter((item) =>
    item.product_name.toLowerCase().includes(dataSearch.toLowerCase())
  );
  // để k hiển thị ra name category khi mà filter product k có 
  // console.log(filter);
  if (filter.length === 0) {
    return null;
  }

  const getDataItem = (data) => {
    props.getDataItem(data)
  };
  return (
    <div className="product-list-item" id={dataItem.id}>
      <li className="body__category-name">
        <p>{dataItem.name} </p>
      </li>
      {filter.map((item) => (
        <ProductItem
          key={item._id}
          image={item.image}
          product_name={item.product_name}
          description={item.description}
          price={item.price}
          onClick={() => getDataItem(item)}
        />
      ))}
    </div>
  )
}

export default ProductList
