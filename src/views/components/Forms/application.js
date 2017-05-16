import React, { Component } from 'react'
import { Field, reduxForm, initialize } from 'redux-form'
import { connect } from 'react-redux'

const form = reduxForm({
  form: 'application'
})

const renderField = field => (
    <input className="uk-input uk-width-small uk-form-controls uk-form-blank" {...field.input}/>
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
            <label class="uk-form-label">Company:</label>
            <Field
              name="company"
              type="text"
              component={renderField}
              label="Company:"
              placeholder="(Company Name)"
            />
            <label class="uk-form-label">Date:</label>
            <Field
              name="date"
              type="date"
              component={renderField}
              label="Date"
            /><br /><br /><br />
          <button action="submit" className="uk-button uk-position-bottom-center uk-margin-bottom uk-margin-right uk-button-default">Save</button>
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
