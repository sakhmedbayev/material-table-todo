import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./About";
import TodoList from "./TodoList";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/about-me">
          <About />
        </Route>
        <Route path="/">
          <TodoList />
        </Route>
      </Switch>
    </Router>
  );
}
