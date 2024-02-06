import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Categories from "./components/Categories";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/categories" component={Categories} />
      </Switch>
    </Router>
  );
};

export default App;
