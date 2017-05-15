import React, { Component} from 'react'
import Modal from 'react-modal'

import ApplicationsTable from '../components/ApplicationsTable'
import NewApplicationButton from '../components/NewApplicationButton'

class Dashboard extends Component {

  constructor(props) {
    super(props)

    this.state = {
      currentApplication: null,
      modalIsOpen: false
    }

    this.openModal = this.openModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }
  openModal() {
    this.setState({modalIsOpen: true})
  }
  closeModal() {
    this.setState({modalIsOpen: false})
  }

  render() {
    return (
      <div>
        <h1 className="uk-heading-line uk-text-center uk-padding"><span>My Job Dashboard</span></h1>
        <NewApplicationButton onClick={this.openModal}/>
        <ApplicationsTable />
        <NewApplicationButton />
        <Modal
          isOpen={this.state.modalIsOpen}
          contentLabel="Modal">
          <h1>Test Modal</h1>
          <button type="button" onClick={this.closeModal}>Close</button>
        </Modal>

      </div>
    )}
  }
export default Dashboard
