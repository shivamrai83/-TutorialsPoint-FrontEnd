import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import LogIn from './login'
import SingUp from './singup'
  export default function index() { 
    return (
        <Router>
        <div>
          <ul>
              <Link to="/login">LogIn</Link> &nbsp;
              <Link to="/singUp">SingUp</Link> &nbsp;
          </ul>
  
          <hr />
          <Switch>
            <Route exact path="/login">
              <LogIn/>
            </Route>
            <Route path="/singUp">
              <SingUp/>
            </Route>
          </Switch>
        </div>
      </Router>
    )
}
