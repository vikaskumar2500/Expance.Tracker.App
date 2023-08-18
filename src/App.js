import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import "./index.css";
import Expenses from "./components/Expenses/Expenses";
import Header from "./components/Header/Header";
import SignUp from "./auth/SignUp";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/" exact>
            <Redirect to='/product'/>
            <SignUp/>
          </Route>

          <Route path="/product">
            <Expenses />
          </Route>

          <Route path='/signup'>
            <SignUp/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
