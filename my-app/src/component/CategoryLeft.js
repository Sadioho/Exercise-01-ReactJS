import React, { Component } from 'react';
import CategoryRow from './CategoryRow';

class CategoryLeft extends Component{
    render(){
        return <ul >  <CategoryRow heading="Name title 1"/> 
            <CategoryRow heading="Name title 2"/> 
            <CategoryRow heading="Name title 3"/> 
            <CategoryRow heading="Name title 4"/> 
            <CategoryRow heading="Name title 5"/> 
        </ul>
    }
}
export default CategoryLeft;