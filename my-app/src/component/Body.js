import React, { Component } from 'react'
import CategoryLeft from "./CategoryLeft";
import FilterProductTable from './FilterProductTable';

class Body extends Component{
    render(){
        return <div className="Body">
            <div className="category-left">
                <CategoryLeft />
            </div>
            <div className="filter">
                <FilterProductTable></FilterProductTable>
            </div>
            <div className="form-coupon"></div>
        </div>
    }
}
export default Body;