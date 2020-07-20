import React, { Component } from "react";
import Calculator from "./Components/calculator";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          
          <Route exact path="/" component={Calculator} />
          
        </div>
      </Router>
    );
  }
}

export default App;
