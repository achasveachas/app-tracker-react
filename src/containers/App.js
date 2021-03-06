import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { logout } from '../redux/modules/Auth/actions'
import fetch from 'isomorphic-fetch'

// views
import Welcome from '../views/Welcome'
import About from '../views/About'
import Signup from '../views/Signup'
import Login from '../views/Login'
import NotFound from '../views/NotFound'
import Dashboard from '../views/Dashboard'
import Navbar from '../views/Navbar'

// custom made components
import { authenticate, authFailure } from '../redux/modules/Auth/actions'

type Props = {
  isAuthenticated: boolean,
  logout: () => void,
  authenticate: () => void,
  authFailure: () => void
}

class App extends Component {

  props: Props

  componentDidMount() {
    this.printGreeting()
    const token = localStorage.getItem('token')
    if (token) {
      this.props.authenticate(token)
    } else {
      // Ping the API server in case it hasn't been used in 30 minutes and Heroku put it to sleep
      fetch('https://app-tracker-api.herokuapp.com/api/v1')
    }
  }

  printGreeting() {
    console.log("Thanks for stopping by!\nTo get in touch:\nWebsite: yechiel.me\nEmail: holler@yechiel.me\nBlog: blog.yechiel.me\nTwitter: @yechielk\nGitHub: achasveachas\nLinkdIn: www.linkedin.com/in/yechiel-k")
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar isAuthenticated={this.props.isAuthenticated} logout={this.props.logout} currentUser={this.props.currentUser.name || this.props.currentUser.username}/>
          <Switch>
            <Route exact path="/" render={() => (
              this.props.isAuthenticated ? (
                <Redirect to="/dashboard"/>
              ) : (
                <Welcome />
              )
            )}/>
            <Route exact path="/signup" component={Signup} isAuthenticated={this.props.isAuthenticated} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/dashboard" render={() => (
              this.props.isAuthenticated ? (
                <Dashboard />
              ) : (
                <Redirect to="/"/>
              )
            )}/>
            <Route exact path="/about" component={About} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    currentUser: state.auth.currentUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    logout,
    authenticate,
    authFailure
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
