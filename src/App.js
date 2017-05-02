import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'

const Home = () => <div>Home</div>
const Signup = () => <form className="signup_form">Signup</form>
const NotFound = () => <div>Not Found</div>

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <nav className="uk-navbar-container navbar" uk-navbar>
            <div className="uk-navbar-left">
              <ul className="uk-navbar-nav">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/signup">Signup</Link></li>
              </ul>
            </div>
          </nav>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/signup" component={Signup} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
