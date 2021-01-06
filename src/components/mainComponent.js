import React, { Component } from "react";
import Header from "./headerComponent";
import Home from "./homeComponent";

class Main extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <Header />
        <Home />
      </React.Fragment>
    );
  }
}

export default Main;
