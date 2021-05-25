import React, { Component } from 'react'
import CategoryLeft from "./CategoryLeft";
import FilterProductTable from './FilterProductTable';
import FormCoupon from './FormCoupon';

class Body extends Component{
    render(){
        return (
            <div className="body">
            <div className="body__category-left">
                <CategoryLeft />
            </div>
            <div className="body__filter">
                <FilterProductTable/>
            </div>
            <div className="body__coupon">
                <FormCoupon/>
            </div>
        </div>
        )
    }
}
export default Body;