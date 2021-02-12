import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import LogIn from './LogIn'
import SingUp from './SingUp'

export default function index() {
  
    return (
        <Router>
        <div>
          <ul>
              <Link to="/">LogIn</Link> &nbsp;
              <Link to="/singUp">SingUp</Link>
          </ul>
  
          <hr />
          <Switch>
            <Route exact path="/">
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
