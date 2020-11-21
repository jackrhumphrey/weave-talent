import * as React from "react";

import 'semantic-ui-css/semantic.min.css';

import "./App.css";

import Splash from "./Splash";
import Resources from "./Resources";
import Profile from "./Profile";

import { Input, Button } from "semantic-ui-react";

import { BrowserRouter, Route, NavLink } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Route exact path="/" component={Splash} />
        <Route path="/Resources" component={Resources} />
        <Route path="/Profile" component={Profile} />
      </BrowserRouter>
    </>
  )
}

export default App;
