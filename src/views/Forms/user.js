import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

const validate = values => {
  const errors = {};

  if (!values.username) {
    errors.username = 'Username is required';
  } else if (values.username.length < 2) {
    errors.email = 'Username must be a minimum of 2 characters';
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
      password: ""
    }
  }

  handleSubmit = data => this.props.onSubmit(data)

  handleChange(event) {
    if (event.target.name === 'username') {
      this.setState({
        username: event.target.value
      })
    } else if (event.target.name === 'password') {
      this.setState({
        password: event.target.value
      })
    }
  }

  render() {
    const {handleSubmit} = this.props
    return (
      <form className="uk-form-stacked" onSubmit={handleSubmit(this.handleSubmit)}>

        <div className="uk-margin">
            <label className="uk-form-label" htmlFor="username">Username</label>
            <div className="uk-form-controls">
                <Field
                  name="username"
                  value={this.state.username}
                  onChange={this.handleChange.bind(this)}
                  className="uk-input uk-form-width-medium"
                  component="input"
                  id="username"
                  type="text"
                  placeholder="Username"
                />
            </div><br />
          <label className="uk-form-label" htmlFor="password">Password</label>
            <div className="uk-form-controls">
              <Field
                name="password"
                value={this.state.password}
                onChange={this.handleChange.bind(this)}
                className="uk-input uk-form-width-medium"
                component="input"
                id="password"
                type="password"
                placeholder="Username"
              />
            </div><br />
          <input type="submit" className="uk-button uk-button-default" value={this.props.action === "signup" ? "Create User" : "Log In"} />
        </div>
      </form>
    )
  }
}

export default reduxForm({
  form: 'user',
  validate
})(UserForm);
