import React, { Component } from 'react';
import Header from "./Header";
import { Link, BrowserRouter as Router, Route } from 'react-router-dom'
import TestPage1 from "./TestPage1";


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Router>
          <Link to="/TestPage1" >TestPage1</Link>
          <Link to="/TestPage2" >TestPage2</Link>
        </Router>
     
      </div>
    );
  }
}

export default App;
