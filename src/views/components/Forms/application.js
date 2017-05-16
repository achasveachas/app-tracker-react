import React, { Component } from 'react'
import { Field, reduxForm, initialize } from 'redux-form'
import { connect } from 'react-redux'

const form = reduxForm({
  form: 'application'
})

const renderField = field => (
  <div>
    <label class="uk-form-label">{field.input.label}</label>
    <input class="uk-input uk-width-small uk-form-controls uk-form-blank" {...field.input}/>
  </div>
)

class ApplicationForm extends Component {

  constructor(props) {
    super(props)
    const currentApplication = this.props.currentApplication
    this.state = {
      company: currentApplication.company || "",
      date: ""
    }
  }

  componentDidMount() {
    this.handleInitialize()
  }

  handleInitialize() {
    const initData = {
      "company": this.props.currentApplication.company,
      "date": this.props.currentApplication.date
    }
    this.props.initialize(initData)
  }

  handleFormSubmit = data => this.props.onSubmit(data)

  render() {
    const {handleSubmit} = this.props
    return (
      <div>
        <form className="uk-form-blank" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <div className="uk-margin">
            <Field
              name="company"
              type="text"
              className="uk-input uk-width-small uk-form-controls uk-form-blank"
              component={renderField}
              label="Company:"
              placeholder="(Company Name)"
            />
            <Field
              name="date"
              type="date"
              className="uk-input uk-width-small uk-form-controls uk-form-blank"
              component={renderField}
              label="Date"
            /><br /><br /><br />
          <button action="submit" className="uk-button uk-margin-bottom uk-margin-right uk-button-default">Save</button>
          </div>
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
