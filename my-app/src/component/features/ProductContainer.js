import React, { Component } from "react";
import error from "../../image/search.png"
import ProductList from "./ProductList";
import SearchInput from "./SearchInput";
 
class ProductContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchField: "",
      // dataScroll:""
    };
  }

  // demoSr = (e)=>  {
  //   // var testDiv = document.getElementById("test");
  //   var a = window.scrollY;
  //   console.log(a);
  //   var demo=document.getElementById('body');
  //   // var demo1=document.getElementById('abc5');
  //   let demo2=document.querySelector(".body__category-name");
  //   console.log("scroll :" + demo.offsetTop);
  //   if(a > demo.offsetTop - 100){
  //     demo.classList.add("active-2")
  //     console.log(`roll: ${demo2.getAttribute("id")}`);
  //   }else{
  //     demo.classList.remove("active-2")
  //   }
  //   // let data2 = this.props.data;
  //   // data2.map(item=>{
  //   //   console.log(item.id);
  //   // })
  //   //   if(testDiv.offsetTop < a ){
  //   //    document.getElementById("demo").innerHTML = testDiv.offsetTop;
   
  //   //    }else{
  //   //         document.getElementById("demo").innerHTML = 0;
  
  //   //    }
  // }
  

  activeSr=(data)=>{
    this.props.changeActive(data)
    document.getElementById('abc'+data).classList.add("active-1")
  }
  scroll=()=>{
    let a= window.scrollY + 90;
    console.log("srcollY",a);
    let sections=document.querySelectorAll(".body__category-name")
    // console.log(sections);
    sections.forEach(curent=>
      document.getElementById(curent.id).offsetTop <= a && a <= document.getElementById(curent.id).offsetTop +
          document.getElementById(curent.id).offsetHeight
        ? this.activeSr(curent.id)
        // ? console.log( "offsetTop", document.getElementById(curent.id).offsetTop )
        : null
    )
  };


  render() {
    let dataList = this.props.data;
    window.addEventListener('scroll',this.scroll)


    return (
      <div className="product-container"  >
        <SearchInput
          type="text"
          className="size-100"
          placeholder="Tìm kiếm sản phẩm"
          handleChange={(e) => this.setState({ searchField: e.target.value })}
        />
        {dataList.map((item) =>
          item.newProduct.length > 0 ? (
            <ProductList
              key={item._id}
              dataItem={item}
              dataSearch={this.state.searchField}
              id_scroll={item.id}

            ></ProductList>
          ) : null
        )}
        <div className="none-data">
          <img src={error} alt="#"/
          >
          <h1>Rất tiết chúng tôi không có sản phẩm</h1>
        </div>
      </div>
    );
  }
}


export default ProductContainer;
