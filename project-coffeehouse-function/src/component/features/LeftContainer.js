
import CategoryList from "./CategoryList";

import React from 'react'

const LeftContainer = ({ ...props }) => {
  return (
    <div className="left-container">
      <CategoryList
        dataCategoryList={props.dataLeft}
        changeActive={props.changeActive}
        active={props.active}
      />
    </div>
  )
}

export default LeftContainer
