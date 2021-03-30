import React from 'react'
import {
    Link,
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import D4 from './D4';

export default function Dashboard() {
    return (
        <Router>
        <div>
            <Link to="/d4">Dashboard</Link> &nbsp;
          <Switch>
            <Route path="/d4">
              <D4/>
            </Route>
          </Switch>
        </div>
      </Router>
    )
}
