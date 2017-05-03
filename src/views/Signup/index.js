import React from 'react'

const Signup = () =>
  <div className="uk-position-center">
    <h2 class="uk-heading-line uk-text-center"><span>Sign Up:</span></h2>
    <form className="uk-form-stacked">

      <div className="uk-margin">
          <label className="uk-form-label" for="username">Username</label>
          <div className="uk-form-controls">
              <input className="uk-input uk-form-width-medium" id="username" type="text" placeholder="Username" />
          </div><br />
          <label className="uk-form-label" for="password">Password</label>
          <div className="uk-form-controls">
              <input className="uk-input uk-form-width-medium" id="password" type="password" placeholder="Password" />
          </div><br />
          <input type="submit" className="uk-button uk-button-default" value="Create User" />
      </div>
    </form>
  </div>

export default Signup;
