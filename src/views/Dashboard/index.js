import React, { Component} from 'react'
import Modal from 'react-modal'
import { connect } from 'react-redux';
import { reset, SubmissionError } from 'redux-form';

import { addApplication, clearCurrentApplication } from '../../redux/modules/Applications/actions'
import ApiServices from '../../redux/services/Api'
import ApplicationsTable from '../components/ApplicationsTable'
import NewApplicationButton from '../components/NewApplicationButton'
import ApplicationForm from '../components/Forms/application'

class Dashboard extends Component {

  constructor(props) {
    super(props)

    this.state = {
      currentApplication: null,
      modalIsOpen: false
    }

  }

  openModal = () => this.setState({modalIsOpen: true})
  closeModal = () => this.setState({modalIsOpen: false})

  openApplicationForm = () => {
    this.props.clearCurrentApplication()
    this.openModal()
  }

  handleNewApplication = (data) => {
    const user_id = this.props.currentUser.id
    return ApiServices.post("/users/" + user_id + "/applications", data, this.props.token)
      .then(response => {
        const { application } = response
        this.props.addApplication(application)
        this.props.reset('application')
        this.closeModal()
      })
      .catch((errors) => {
        console.log(errors)
        throw new SubmissionError(errors)
      })

  }

  render() {
    const modalStyle = {
      overlay: {
        "position": "absolute",
        "overflow": "auto",
        "minHeight": "825px",
      }
    }
    return (
      <div>
        <h1 className="uk-heading-line uk-text-center uk-padding"><span>My Job Dashboard</span></h1>
        <NewApplicationButton onClick={this.openApplicationForm}/>
        <ApplicationsTable />
        <NewApplicationButton onClick={this.openApplicationForm}/>
        <Modal
          isOpen={this.state.modalIsOpen}
          contentLabel="Modal"
          onRequestClose={this.closeModal}
          style={modalStyle}>
          <h1 className="uk-heading-line uk-text-center uk-padding"><span>New Application</span></h1>
          <ApplicationForm onSubmit={this.handleNewApplication}/>
          <button type="button" className="uk-button uk-margin-top uk-margin-right uk-button-secondary uk-position-top-right" onClick={this.closeModal}>X</button>
        </Modal>

      </div>
    )}
  }

const mapStateToProps = (state) => {
  return {
    currentUser: state.auth.currentUser,
    token: state.auth.token,
    currentApplication: state.applications.currentApplication
  }
}
export default connect(mapStateToProps, { addApplication, clearCurrentApplication, reset })(Dashboard)
