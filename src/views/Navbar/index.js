import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Navbar extends Component {

  constructor(props) {
    super(props)

    this.handleLogout = this.handleLogout.bind(this)
  }

  handleLogout() {
    this.props.logout(this.context.router)
  }

  render() {
    return (
        <div>
          {
            this.props.isAuthenticated ?
            <nav className="uk-navbar-container navbar uk-navbar">
              <div className="uk-navbar-left">
                <ul className="uk-navbar-nav">
                  <li><NavLink to="/">Home</NavLink></li>
                  <li><NavLink to="/" onClick={this.handleLogout}>Log Out</NavLink></li>
                </ul>
              </div>
              <div className="uk-navbar-right uk-padding-small">
                <ul className="uk-navbar-nav">
                  <li>Hello {this.props.currentUser}!</li>
                </ul>
              </div>
            </nav>

            :

            <ul className="uk-navbar-nav">
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/signup">Signup</NavLink></li>
              <li><NavLink to="/login">Login</NavLink></li>
            </ul>
          }
        </div>
    )
  }
}

export default Navbar
