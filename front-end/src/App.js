import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Index from './LogIn-SingUp/index'
import Dashboard from './Dashboard/index'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
        <ul>
              <Link to="/index">Index</Link> &nbsp;
              <Link to="/dashboard">dashboard</Link> &nbsp;
          </ul>
        <Switch>
            <Route exact path="/index">
              <Index/>
            </Route>
            <Route path="/dashboard">
              <Dashboard/>
            </Route>
          </Switch>
          </Router>
      </header>
    </div>
  );
}

export default App;

