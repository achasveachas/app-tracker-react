import React, { Component} from 'react'
import Modal from 'react-modal'
import { connect } from 'react-redux';

import { newApplication } from '../../redux/modules/Applications/actions'
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

  handleNewApplication = (data) => {
    this.props.newApplication({application: data}, this.props.currentUser.id)
    this.closeModal()
  }

  render() {
    return (
      <div>
        <h1 className="uk-heading-line uk-text-center uk-padding"><span>My Job Dashboard</span></h1>
        <NewApplicationButton onClick={this.openModal}/>
        <ApplicationsTable />
        <NewApplicationButton onClick={this.openModal}/>
        <Modal
          isOpen={this.state.modalIsOpen}
          contentLabel="Modal"
          onRequestClose={this.closeModal}>
          <h1 className="uk-heading-line uk-text-center uk-padding">New Application</h1>
          <ApplicationForm onSubmit={this.handleNewApplication}/>
          <button type="button" className="uk-button uk-margin-bottom uk-margin-right uk-button-default uk-position-bottom-right" onClick={this.closeModal}>X</button>
        </Modal>

      </div>
    )}
  }

const mapStateToProps = (state) => {
  return {
    currentUser: state.auth.currentUser
  }
}
export default connect(mapStateToProps, { newApplication })(Dashboard)
