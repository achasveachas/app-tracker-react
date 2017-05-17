import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'

const form = reduxForm({
  form: 'application'
})

const renderField = field => (
    <input className="uk-input uk-width-small uk-margin-left uk-margin-right uk-form-controls" {...field.input}/>
)

const renderCheckbox = field => (
    <input type="checkbox" className="uk-checkbox uk-margin-left" {...field.input}/>
)

class ApplicationForm extends Component {



  componentDidMount() {
    this.handleInitialize()
  }

  handleInitialize() {
    const currentApplication = this.props.currentApplication
    const initData = {
      "company": currentApplication.company,
      "date": currentApplication.date,
      "complete": currentApplication.complete
    }
    this.props.initialize(initData)
  }

  handleFormSubmit = data => this.props.onSubmit(data)

  render() {
    const {handleSubmit} = this.props
    return (
      <div>
        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <div className="uk-margin uk-position-center">
            <h3 className="uk-heading-line uk-text-center uk-padding"><span>Who am I applying with?</span></h3>
            <label className="uk-form-label">Company:</label>
            <Field
              name="company"
              component={renderField}
            />
            <label className="uk-form-label">Contact Name:</label>
            <Field
              name="contact_name"
              component={renderField}
            />
            <label className="uk-form-label">Contact Title:</label>
            <Field
              name="contact_title"
              component={renderField}
            />
            <h3 className="uk-heading-line uk-text-center uk-padding"><span>What are we doing?</span></h3>
            <label className="uk-form-label">Date:</label>
            <Field
              name="date"
              component={renderField}
            />
            <label className="uk-form-label">Action:</label>
            <Field
              name="action"
              component={renderField}
            />
            <label className="uk-form-label">Completed?</label>
            <Field
              name="complete"
              component={renderCheckbox}
            />
            <h3 className="uk-heading-line uk-text-center uk-padding"><span>What kind of job is this for?</span></h3>
            <label className="uk-form-label">Job Title:</label>
            <Field
              name="job_title"
              component={renderField}
            />
            <label className="uk-form-label">Job URL:</label>
            <Field
              name="job_url"
              component={renderField}
            />
          <label className="uk-form-label">Notes:</label>
            <Field
              name="notes"
              type="textarea"
              component={renderField}
            />
          </div>
          <button action="submit" className="uk-button uk-position-bottom-center uk-margin-bottom uk-button-secondary">Save</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { currentApplication: state.applications.currentApplication }
}

ApplicationForm = connect(mapStateToProps)(form(ApplicationForm))

export default ApplicationForm
