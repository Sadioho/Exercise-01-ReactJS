import React, { Component } from 'react'

class CategoryRow extends Component{
    render(){
        return(
            <li> <a href='/#'>{this.props.heading} </a> </li>
        ) 
    }
}
export default CategoryRow;