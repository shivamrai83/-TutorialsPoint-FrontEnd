import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";  
import Album from './Dashboard/album'
import LogIn from './LogIn-SingUp/login'
import SingUp from './LogIn-SingUp/singup'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
        <Switch>
            <Route exact path="/login">
              <LogIn/>
            </Route>
            <Route exact path="/singUp">
              <SingUp/>
            </Route>
            {/* <Route exact path="/dash">
              <D4/>
            </Route> */}
            <Route exact path="/album">
              <Album/>
            </Route>
          </Switch>
          </Router>
      </header>
    </div>
  );
}

export default App;

