import React from 'react'
const CategoryList = ({ ...props }) => {
  const handleActive = (data) => {
    let elm = document.getElementById(`${data}`);
    if (elm !== null) {
      elm.scrollIntoView();
    }
    props.changeActive(data);
  };
  return (
    <ul className="category-list">
      {props.dataCategoryList.map((listItem) =>
        listItem.listProduct.length > 0 ? (
          <li
            className={listItem.id === props.active ? "active-1" : null}
            key={listItem.id}
            id={"abc" + listItem.id}
            onClick={() => {
              handleActive(listItem.id);
            }}
          >
            <p className="category-item ">{listItem.name}</p>
          </li>
        ) : null
      )}
    </ul>
  )
}

export default CategoryList
