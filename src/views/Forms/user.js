import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

const validate = values => {
  const errors = {};

  if (!values.username) {
    errors.username = 'Username is required';
  } else if (values.username.length < 2) {
    errors.username = 'Username must be a minimum of 2 characters';
  }
  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 8) {
    errors.password = 'Password must be a minimum of 8 characters';
  }

  return errors;
}

class UserForm extends Component {

  constructor(props) {
    super(props)

    this.state = {
      username: "",
      password: "",
      usernameErrors: {},
      passwordErrors: {}
    }
  }

  handleSubmit = data => this.props.onSubmit(data)

  handleChange(event) {
    if (event.target.name === 'username') {
      this.setState({
        usernameErrors: validate({username: event.target.value}),
        username: event.target.value
      })
    } else if (event.target.name === 'password') {
      this.setState({
        passwordErrors: validate({password: event.target.value}),
        password: event.target.value
      })
    }
  }

  render() {
    const {handleSubmit, errors} = this.props
    const renderedErrorsLi = errors.map((error, i) => <li key={i}>{error}</li>)
    return (
      <form className="uk-form-stacked" onSubmit={handleSubmit(this.handleSubmit)}>
        {errors.length > 0 ? <ul className="uk-alert-danger">{renderedErrorsLi}</ul> : null}
        <div className="uk-margin">
            <label className="uk-form-label" htmlFor="username">Username</label>
            <div className="uk-form-controls">
                <Field
                  name="username"
                  value={this.state.username}
                  onChange={this.handleChange.bind(this)}
                  className="uk-input uk-width-medium"
                  component="input"
                  id="username"
                  type="text"
                  placeholder="Username"
                /><br />
              {!!this.state.usernameErrors.username ? <small className="uk-alert-danger">{this.state.usernameErrors.username}</small> : <small><font color="white">.</font></small>}
            </div>
            <label className="uk-form-label" htmlFor="password">Password</label>
            <div className="uk-form-controls">
              <Field
                name="password"
                value={this.state.password}
                onChange={this.handleChange.bind(this)}
                className="uk-input uk-width-medium"
                component="input"
                id="password"
                type="password"
                placeholder="Username"
              /><br />
            {!!this.state.passwordErrors.password ? <small className="uk-alert-danger">{this.state.passwordErrors.password}</small> : <small><font color="white">.</font></small>}
          </div><br />
          <input type="submit" className="uk-button uk-button-default uk-position-bottom-center" value={this.props.action === "signup" ? "Create User" : "Log In"} />
        </div>
      </form>
    )
  }
}

export default reduxForm({
  form: 'user',
  validate
})(UserForm);
