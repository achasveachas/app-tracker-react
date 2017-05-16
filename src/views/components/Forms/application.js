import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'


class ApplicationForm extends Component {

  constructor(props) {
    super(props)

    this.state = {
      company: "",
      date: ""
    }
  }

  handleSubmit = data => this.props.onSubmit(data)

  handleChange(event) {
    if (event.target.name === 'company') {
      this.setState({
        company: event.target.value
      })
    } else if (event.target.name === 'date') {
      this.setState({
        date: event.target.value
      })
    }
  }

  render() {
    const {handleSubmit} = this.props
    return (
      <form className="uk-form-stacked" onSubmit={handleSubmit(this.handleSubmit)}>
        <div className="uk-margin">
          <label className="uk-form-label" htmlFor="company">Company</label>
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
          <label className="uk-form-label" htmlFor="date">Date</label>
          <div className="uk-form-controls">
              <Field
                name="date"
                value={this.state.date}
                onChange={this.handleChange.bind(this)}
                className="uk-input uk-width-medium"
                component="input"
                id="date"
                type="date"
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
