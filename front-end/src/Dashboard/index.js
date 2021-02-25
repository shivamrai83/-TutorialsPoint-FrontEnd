import React from 'react'
import {
    Link,
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import D1 from './D1';
import D2 from './D2';
import D3 from './D3';
import D4 from './D4';

export default function Dashboard() {
    return (
        <Router>
        <div>
            <Link to="/d1">d1</Link> &nbsp;
            <Link to="/d2">d2</Link> &nbsp;
            <Link to="/d3">d3</Link> &nbsp;
            <Link to="/d4">d4</Link> &nbsp;
          <Switch>
            <Route exact path="/d1">
              <D1/>
            </Route>
            <Route path="/d2">
              <D2/>
            </Route>
            <Route path="/d3">
              <D3/>
            </Route>
            <Route path="/d4">
              <D4/>
            </Route>
          </Switch>
        </div>
      </Router>
    )
}
