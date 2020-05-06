import React, { Component } from 'react';
import Header from "./Header";
import TestPage1 from "./TestPage1.js";
import TestPage2 from "./TestPage2";
import  { Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/TestPage1" component={TestPage1} />
          <Route exact path="/TestPage2" component={TestPage2} />
        </Switch>
     
      </div>
    );
  }
}

export default App;
