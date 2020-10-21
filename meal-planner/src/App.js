import React from "react";
import { Switch, Route } from "react-router-dom";
import { Footer } from "./Components";
import { Home, Recipes } from "./Pages";

const App = () => {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/recipes" component={Recipes} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
