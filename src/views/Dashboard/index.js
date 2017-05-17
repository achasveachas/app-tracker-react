import React, { Component} from 'react'
import Modal from 'react-modal'
import { connect } from 'react-redux';

import { newApplication, clearCurrentApplication } from '../../redux/modules/Applications/actions'
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
    this.props.newApplication(data, this.props.currentUser.id)
    this.closeModal()
  }

  render() {
    const modalStyle = {
      overlay: {
        "position": "absolute",
        "overflow": "auto",
        "min-height": "825px",
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
    currentApplication: state.applications.currentApplication
  }
}
export default connect(mapStateToProps, { newApplication, clearCurrentApplication })(Dashboard)
