import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./About";
import Todos from "./Todos";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/about-me">
          <About />
        </Route>
        <Route path="/">
          <Todos />
        </Route>
      </Switch>
    </Router>
  );
}
