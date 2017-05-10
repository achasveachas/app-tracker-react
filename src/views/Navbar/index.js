import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Navbar extends Component {

  render() {
    return (
      <nav className="uk-navbar-container navbar uk-navbar">
        <div className="uk-navbar-left">
          <ul className="uk-navbar-nav">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/signup">Signup</NavLink></li>
            <li><NavLink to="/login">Login</NavLink></li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar
