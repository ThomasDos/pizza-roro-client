import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { Header } from "./components/header/header.component";

import "./App.css";
function App() {
  return (
    <div className="App">
      <Header />
      <Switch></Switch>
    </div>
  );
}

export default App;
