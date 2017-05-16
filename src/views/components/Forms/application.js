import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'


class ApplicationForm extends Component {

  constructor(props) {
    super(props)
    const currentApplication = this.props.currentApplication
    this.state = {
      company: currentApplication ? currentApplication[0].company : "",
      date: ""
    }
  }

  handleSubmit = data => this.props.onSubmit(data)

  render() {
    const {handleSubmit} = this.props
    return (
      <div>
        <form className="uk-form-blank" onSubmit={handleSubmit(this.handleSubmit)}>
          <div className="uk-margin">
            <label className="uk-form-label" htmlFor="company">Company:</label>
            <Field
              name="company"
              value={this.state.company}
              className="uk-input uk-width-medium uk-form-blank uk-form-controls"
              component="input"
              id="company"
              type="text"
              placeholder="(Company Name)"
            />
            <label className="uk-form-label" htmlFor="date">Date:</label>
            <Field
              name="date"
              value={this.state.date}
              className="uk-input uk-width-small uk-form-controls uk-form-blank"
              component="input"
              id="date"
              type="date"
            /><br />
            <div className="uk-position-bottom-center">
              <input type="submit" className="uk-button uk-margin-bottom uk-margin-right uk-button-default" value="Save" />
            </div>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { currentApplication: state.applications.currentApplication }
}

ApplicationForm = reduxForm({form: 'application'})(ApplicationForm)
ApplicationForm = connect(mapStateToProps)(ApplicationForm)

export default ApplicationForm
