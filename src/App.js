import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import "./index.css";
import Expenses from "./components/Expenses/Expenses";
import Header from "./components/Header/Header";
import SignUp from "./auth/SignUp";
import Login from "./auth/Login";
import { UserAuth } from "./auth-context/AuthContext";
import EmailVerification from "./auth/EmailVerification";
import Profile from "./auth/Profile/Profile";
import Contact from "./auth/Profile/Contact";

const App = () => {
  const { token, user } = UserAuth();
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/" exact>
            <Redirect to="/product" />
          </Route>

          <Route path="/product">
            <Expenses />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/signup">
            <SignUp />
          </Route>

          <Route path="/emailVerification">
            <EmailVerification token={token} email={user?.email} />
          </Route>

          <Route path="/profile/profile-updatation">
            <Contact />
          </Route>

          <Route path="/profile">
            <Profile />
          </Route>

          <Route path="/profile-completion">
            <Profile />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
