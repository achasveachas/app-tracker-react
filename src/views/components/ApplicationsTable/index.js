import React, {Component} from 'react'
import { connect } from 'react-redux'

import { getApplications, setCurrentApplication } from '../../../redux/modules/Applications/actions'
import ApplicationRow from '../ApplicationRow'

class ApplicationsTable extends Component {

  componentDidMount() {
    this.props.getApplications(this.props.currentUser.id)
  }

  setApplication = (id) => this.props.setCurrentApplication(id)
  

  render() {

    const RenderedRows = this.props.applications
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .map(app => <ApplicationRow key={app.id} application={app} onClick={this.setApplication} />)

    return (
    <div className="uk-overflow-auto">
      <table className="uk-table uk-table-hover uk-table-divider">
        <thead>
          <tr>
            <th>Company</th>
            <th>Date</th>
            <th>Action</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          {RenderedRows}
        </tbody>

      </table>
    </div>
  )}
}

const mapStateToProps = (state) => {
  return {
    applications: state.applications.applications,
    currentApplication: state.applications.currentApplication,
    currentUser: state.auth.currentUser
  }
}


export default connect(mapStateToProps, { getApplications, setCurrentApplication })(ApplicationsTable)
