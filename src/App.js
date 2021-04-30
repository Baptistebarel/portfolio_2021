import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import "../src/styles/reset.css"
import  "./App.scss"


import Home from "./pages/home/home"
import About  from "./pages/about/about"


const App = () => {
  return (
    <Router>
      <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
      </Switch>
      </div>
    </Router>
    
  );
}

export default App;