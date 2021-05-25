import React, { Component } from 'react';
import CategoryRow from './CategoryRow';

class CategoryLeft extends Component{
    render(){
        return(
            <ul className="ct-left">  
            <CategoryRow /> 
    
        </ul>
        )
    }
}
export default CategoryLeft;