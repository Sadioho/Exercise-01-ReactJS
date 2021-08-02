import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { UserProvider } from "./component/Helpers/UserContext";
import Body from "./component/layout/Body";
import Footer from "./component/layout/Footer";
import Header from "./component/layout/Header";
import Login from "./component/layout/Login";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalAmount: 0,
      timeSetting: "Giao Ngay",
      timeNow: null,
      dateNow: null,
    };
  }
  componentDidMount() {
    let dateTime = new Date();
    let time = dateTime.toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
    });
    let dateNow = dateTime.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
    });
    this.setState({
      timeNow: time,
      dateNow: dateNow,
    });
  }
  setTotalAmount = (data) => {
    this.setState({
      totalAmount: data,
    });
  };

  setTimeSetting = (date, time) => {
    if (time === this.state.timeNow && date === this.state.dateNow) {
      this.setState({
        timeSetting: "Giao ngay",
      });
    } else {
      this.setState({
        timeSetting: `${date}  ${time}`,
      });
    }
  };

  render() {
    return (
      <Router>
        <div>
          <UserProvider
            value={{
              setTimeSetting: this.setTimeSetting,
              timeSetting: this.state.timeSetting,
              timeNow:this.state.timeNow,
              dateNow:this.state.dateNow
            }}
          >
            <Header totalAmount={this.state.totalAmount} />
          </UserProvider>
          <Route
            path="/"
            exact
            render={(props) => (
              <Body setTotalAmount={this.setTotalAmount} {...props}></Body>
            )}
          ></Route>
          <Route path="/login" render={(props) => <Login {...props} />}></Route>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
