import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Index from './LogIn-SingUp/index'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
        <ul>
              <Link to="/index">Index</Link> &nbsp;
          </ul>
        <Switch>
            <Route exact path="/index">
              <Index/>
            </Route>
          </Switch>
          </Router>
      </header>
    </div>
  );
}

export default App;

