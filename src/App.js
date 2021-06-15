import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { BrowserRouter as Router, Redirect, Link, Route, Switch } from "react-router-dom";
import Header from "./components/navbar/navbar.components";
import Projects from "./pages/academics/Projects/projects.components";
import Hobbies from "./pages/academics/Hobbies/hobies.component";
import Homepage from "./pages/academics/homepage/homepage.component";
import Academics from "./pages/academics/Academics/academics.component";
import Books from "./pages/academics/books/books.component";
import SignIn from "./components/sign-in/sign-in.component.jsx";
import "./App.css";

function App() {
  return (
    
      <Router>
        <Header></Header>
        <div className="App">
          <Switch>
            <Route path="/" exact component={Homepage}></Route>

            <Route path="/Academics" component={Academics}></Route>

            <Route path="/Projects" component={Projects}></Route>

            <Route path="/Books" component={Books}></Route>

            <Route path="/Hobbies" component={Hobbies}></Route>
            <Route path="/signin" component={SignIn}></Route>
          </Switch>
        </div>
      </Router>
    
  );
}

export default App;
