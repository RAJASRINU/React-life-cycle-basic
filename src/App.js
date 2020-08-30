import React, { Component } from "react";
import Login from "./Components/Login";
import { Route,  HashRouter,Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Switch>
      <HashRouter>
        <div>
        <Route exact path="/" component={Login} />
       
        </div>
        </HashRouter>
        </Switch>
    );
  }
}

export default App;
