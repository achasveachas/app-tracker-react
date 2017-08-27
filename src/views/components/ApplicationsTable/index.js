import React, {Component} from 'react'
import { connect } from 'react-redux'
import Modal from 'react-modal'
import { reset, SubmissionError } from 'redux-form';

import { gotApplications, setCurrentApplication, deleteApplication, editApplication } from '../../../redux/modules/Applications/actions'
import ApiServices from '../../../redux/services/Api'
import ApplicationRow from '../ApplicationRow'
import ApplicationForm from '../../components/Forms/application'


class ApplicationsTable extends Component {

  constructor(props) {

    super(props)
    this.state = {
      modalIsOpen: false,
      filter: ""
    }
  }

  componentDidMount() {
    const user_id = this.props.currentUser.id

    return ApiServices.get("/users/" + user_id + "/applications")
     .then(response => {
       this.props.gotApplications(response.applications)
     })
     .catch((errors) => {
       console.log(errors);
     })
  }

  setApplication = (id) => this.props.setCurrentApplication(id)
  openModal = () => this.setState({modalIsOpen: true})
  closeModal = () => this.setState({modalIsOpen: false})

  handleRowClick = (id) => {
    this.setApplication(id)
    this.openModal()
  }


  removeItem = (user_id, app_id) => {
    return ApiServices.delete("/users/" + user_id + "/applications/" + app_id, this.props.token)
      .then(() => {
        this.props.deleteApplication(app_id)
      })
      .catch((errors) => {
        console.log(errors);
      })
  }

  handleUpdateApplication = (data) => {
    const user_id = this.props.currentUser.id
    const app_id = this.props.currentApplication.id
    return ApiServices.patch("/users/" + user_id + "/applications/" + app_id, data, this.props.token)
      .then(response => {
        const { application } = response
        this.props.editApplication(application)
        this.props.reset('application')
        this.closeModal()
      })
      .catch((errors) => {
        console.log(errors)
        throw new SubmissionError(errors)
      })
  }

  filteredApplications = () => {
    const filter = this.state.filter
    if (filter && filter.length > 0) {
      return this.props.applications.filter(app => app.company.toLowerCase().includes(filter.toLowerCase()))
    } else {
      return this.props.applications
    }
  }

  handleFilterChange = (event) => this.setState({filter: event.target.value})

  render() {

    let RenderedRows = <tr><td className="uk-text-bold uk-text-muted uk-text-center">No Applications Match The Current Criteria </td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>

    if (this.filteredApplications().length > 0) {

      RenderedRows = this.filteredApplications()
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .map((app, index) => <ApplicationRow key={index} application={app} user_id={this.props.currentUser.id} onClick={this.handleRowClick} onDelete={this.removeItem}/>)
    }

    const modalStyle = {
      overlay: {
        "position": "absolute",
        "overflow": "auto",
        "minHeight": "825px",
      }
    }

    return (
      <div className="uk-overflow-auto">
        {this.props.applications.length > 0 ?
          <div>
            <form>
              <div className="uk-margin-left">
                <input
                  className="uk-input uk-width-medium"
                  type="text"
                  placeholder="Filter By Company Name"
                  value={this.state.filter}
                  onChange={this.handleFilterChange}
                />
              </div>
            </form>
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
          </div>
        :
          <div>
            <h2 className="uk-heading-line uk-text-center uk-text-capitalize"><span>You do not have any applications yet</span></h2>
            <h3 className="uk-heading-line uk-text-center uk-text-capitalize"><span>Click on the "New Application" button to add a new application</span></h3>
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
    currentUser: state.auth.currentUser,
    token: state.auth.token
  }
}


export default connect(mapStateToProps, { gotApplications, setCurrentApplication, deleteApplication, editApplication, reset })(ApplicationsTable)
