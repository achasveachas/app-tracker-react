import React from 'react'

const UserForm = (props) =>

    <form className="uk-form-stacked">

      <div className="uk-margin">
          <label className="uk-form-label" htmlFor="username">Username</label>
          <div className="uk-form-controls">
              <input className="uk-input uk-form-width-medium" id="username" type="text" placeholder="Username" />
          </div><br />
        <label className="uk-form-label" htmlFor="password">Password</label>
          <div className="uk-form-controls">
              <input className="uk-input uk-form-width-medium" id="password" type="password" placeholder="Password" />
          </div><br />
        <input type="submit" className="uk-button uk-button-default" value={props.action === "signup" ? "Create User" : "Log In"} />
      </div>
    </form>

export default UserForm;
