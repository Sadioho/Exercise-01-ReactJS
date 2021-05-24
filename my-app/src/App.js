import React, { Component } from "react";
import Header from "./component/Header";
import Body from "./component/Body";

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Body/>        
      </div>
    );
  }
}

export default App;
