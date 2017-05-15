import React, { Component} from 'react'
import Modal from 'react-modal'

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

  handleSubmit = (event) => {
    event.preventDefault()
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
          contentLabel="Modal"
          data-uk-modal
          onSubmit={this.handleSubmit}>
          <h1 className="uk-heading-line uk-text-center uk-padding">Application</h1>
          <ApplicationForm />
        </Modal>

      </div>
    )}
  }
export default Dashboard
