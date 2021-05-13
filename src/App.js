import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Header from "./components/header/header.component";
import HomePage from "./pages/home/home.component";
import MenuPage from "./pages/menu/menu.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import DiscountPage from "./pages/discout/discount.component";

import "./App.css";
function App() {
  //   componentDidMount() {

  // }

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route component={HomePage} exact path="/" />
        <Route component={MenuPage} path="/menu" />
        <Route component={SignInAndSignUpPage} exact path="/signin" />
        <Route component={DiscountPage} path="/discount" />
        {/* <Route
          render={() =>
            this.props.currentUser ? (
              <Redirect to="/" />
            ) : (
              <SignInAndSignUpPage />
            )
          }
          exact
          path="/signin"
        /> */}
      </Switch>
    </div>
  );
}

export default App;
