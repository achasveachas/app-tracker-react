import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { logout } from '../redux/modules/Auth/actions'

// views
import Home from '../views/Home'
import Signup from '../views/Signup'
import Login from '../views/Login'
import NotFound from '../views/NotFound'
import Applications from '../views/Applications'
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
    const token = localStorage.getItem('token')
    if (token) {
      this.props.authenticate()
    } else {
      this.props.authFailure()
    }
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar isAuthenticated={this.props.isAuthenticated} logout={this.props.logout} currentUser={this.props.currentUser.username}/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/signup" component={Signup} isAuthenticated={this.props.isAuthenticated} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/applications" component={Applications} />
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
