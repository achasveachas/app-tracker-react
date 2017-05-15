import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'


class ApplicationForm extends Component {

  constructor(props) {
    super(props)

    this.state = {
      company: "",
      password: "",
      name: ""
    }
  }

  handleSubmit = () => this.props.onSubmit()

  handleChange(event) {
    if (event.target.name === 'company') {
      this.setState({
        company: event.target.value
      })
    } else if (event.target.name === 'password') {
      this.setState({
        password: event.target.value
      })
    }
  }

  render() {

    return (
      <form className="uk-form-stacked" onSubmit={this.handleSubmit}>
        <div className="uk-margin">
          <label className="uk-form-label" htmlFor="company">company*</label>
          <div className="uk-form-controls">
              <Field
                name="company"
                value={this.state.company}
                onChange={this.handleChange.bind(this)}
                className="uk-input uk-width-medium"
                component="input"
                id="company"
                type="text"
                placeholder="company"
              /><br />
          </div>
          <label className="uk-form-label" htmlFor="password">Password*</label>
          <div className="uk-form-controls">
              <Field
                name="password"
                value={this.state.password}
                onChange={this.handleChange.bind(this)}
                className="uk-input uk-width-medium"
                component="input"
                id="password"
                type="password"
                placeholder="company"
              /><br />
          </div><br />
        <input type="submit" className="uk-button uk-button-default uk-position-bottom-center" value="Save" />
        </div>
      </form>
    )
  }
}

export default reduxForm({
  form: 'application'
})(ApplicationForm);
