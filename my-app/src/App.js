import React, { Component } from "react";
import Header from "./component/layout/Header";
import Body from "./component/layout/Body";
import Footer from "./component/layout/Footer";
import Login from "./component/layout/Login";
// import PlacehoderLoading from "./component/placehoders/PlacehoderLoading";
// import firebase from 'firebase'
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalAmount: 0,
    };
  }

  setTotalAmount = (data) => {
    this.setState({
      totalAmount: data,
    });
  };

  render() {
    return (
      <Router>
        <div>
          <Header totalAmount={this.state.totalAmount} />

          <Route
            path="/"
            exact
            render={(props) => (
              <Body setTotalAmount={this.setTotalAmount} {...props}></Body>
            )}
          ></Route>
          <Route path="/login" render={(props)=> <Login {...props}/>}>
          </Route>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
