import React, { Component } from "react";
import Header from "./component/layout/Header";
import Body from "./component/layout/Body";
import Footer from "./component/layout/Footer";
import Login from "./component/layout/Login";
// import PlacehoderLoading from "./component/placehoders/PlacehoderLoading";

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
            render={() => <Body setTotalAmount={this.setTotalAmount}></Body>}
          ></Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
