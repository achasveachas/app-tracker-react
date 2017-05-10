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
      <nav className="uk-navbar-container navbar uk-navbar">
        <div className="uk-navbar-left">
          {
            this.props.isAuthenticated ?
            <ul className="uk-navbar-nav">
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/" onClick={this.handleLogout}>Log Out</NavLink></li>
            </ul>

            :

            <ul className="uk-navbar-nav">
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/signup">Signup</NavLink></li>
              <li><NavLink to="/login">Login</NavLink></li>
            </ul>
          }
        </div>
      </nav>
    )
  }
}

export default Navbar
