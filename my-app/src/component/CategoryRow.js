import React, { Component } from 'react'

class CategoryRow extends Component{
    constructor(props){
        super(props);
        this.state={
            categorys: []
        }
    }

    componentDidMount() {
        fetch('https://api.thecoffeehouse.com/api/v2/category/web')
        .then((response) => response.json())
        .then(categoryList => {
            this.setState({ categorys: categoryList });
        });
    }
    
    render() {
        return (
            <ul>
                {this.state.categorys.map((listItem) => (
                    
                    <li className="body__category-name"  key={listItem.id}> <a href='/#'>{listItem.name} </a> </li>
                ))}
            </ul>
        )
    }
   
} 
export default CategoryRow;