import React, {Component} from 'react'
import { connect } from 'react-redux'
import Modal from 'react-modal'

import { getApplications, setCurrentApplication, removeItem, updateApplication } from '../../../redux/modules/Applications/actions'
import ApplicationRow from '../ApplicationRow'
import ApplicationForm from '../../components/Forms/application'


class ApplicationsTable extends Component {

  constructor(props) {

    super(props)
    this.state = {
      modalIsOpen: false
    }
  }

  componentDidMount() {
    this.props.getApplications(this.props.currentUser.id)
  }

  setApplication = (id) => this.props.setCurrentApplication(id)
  removeItem = (user_id, app_id) => this.props.removeItem(user_id, app_id)
  openModal = () => this.setState({modalIsOpen: true})
  closeModal = () => this.setState({modalIsOpen: false})

  handleRowClick = (id) => {
    this.setApplication(id)
    this.openModal()
  }

  handleUpdateApplication = (data) => {
    this.props.updateApplication(data, this.props.currentUser.id, this.props.currentApplication.id)
    this.closeModal()
  }

  render() {

    const RenderedRows = this.props.applications
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .map((app, index) => <ApplicationRow key={index} application={app} user_id={this.props.currentUser.id} onClick={this.handleRowClick} onDelete={this.removeItem}/>)

    const modalStyle = {
      overlay: {
        "position": "absolute",
        "overflow": "auto",
        "min-height": "825px",
      }
    }

    return (
      <div className="uk-overflow-auto">
        {this.props.applications.length > 0 ?
          <table className="uk-table uk-table-hover uk-table-divider">
            <thead>
              <tr>
                <th>Company</th>
                <th>Job Title</th>
                <th>Contact</th>
                <th>Date</th>
                <th>Action</th>
                <th className="uk-table-expand">Notes</th>
                <th className="uk-table-shrink uk-table-middle">Completed</th>
                <th className="uk-table-shrink"></th>
              </tr>
            </thead>
            <tbody>
              {RenderedRows}
            </tbody>

          </table>
        :
          <div>
            <h2 className="uk-heading-line uk-text-center"><span>You do not have any applications at his time</span></h2>
            <h3 className="uk-heading-line uk-text-center"><span>Click on the "New Application" button to add a new application</span></h3>
          </div>
        }
        <Modal
          isOpen={this.state.modalIsOpen}
          contentLabel="Modal"
          onRequestClose={this.closeModal}
          style={modalStyle}>
          <h1 className="uk-heading-line uk-text-center uk-padding"><span>View/Edit Application</span></h1>
          <ApplicationForm onSubmit={this.handleUpdateApplication}/>
          <button type="button" className="uk-button uk-margin-top uk-margin-right uk-button-secondary uk-position-top-right" onClick={this.closeModal}>X</button>
        </Modal>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    applications: state.applications.applications,
    currentApplication: state.applications.currentApplication,
    currentUser: state.auth.currentUser
  }
}


export default connect(mapStateToProps, { getApplications, setCurrentApplication, removeItem, updateApplication })(ApplicationsTable)
