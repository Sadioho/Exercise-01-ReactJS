import React, { Component } from 'react'

class CategoryRow extends Component{
    render(){
        return(
            <li className="body__category-name"> <a href='/#'>{this.props.heading} </a> </li>
        ) 
    }
} 
export default CategoryRow;