import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Album from '../Dashboard/album'
import LogIn from './login'
import SingUp from './singup'
import D4 from '../Dashboard/D4'
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
            <Route exact path="/singUp">
              <SingUp/>
            </Route>
            <Route exact path="/dash">
              <D4/>
            </Route>
            <Route exact path="/dashboard">
              <Album/>
            </Route>
          </Switch>
        </div>
      </Router>
    )
}
