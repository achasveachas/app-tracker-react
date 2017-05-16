import React, {Component} from 'react'
import { connect } from 'react-redux'

import { getApplications, setCurrentApplication, removeItem } from '../../../redux/modules/Applications/actions'
import ApplicationRow from '../ApplicationRow'

class ApplicationsTable extends Component {

  componentDidMount() {
    this.props.getApplications(this.props.currentUser.id)
  }

  setApplication = (id) => this.props.setCurrentApplication(id)
  removeItem = (user_id, app_id) => this.props.removeItem(user_id, app_id)


  render() {

    const RenderedRows = this.props.applications
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .map((app, index) => <ApplicationRow key={index} application={app} user_id={this.props.currentUser.id} onClick={this.setApplication} onDelete={this.removeItem}/>)

    return (
    <div className="uk-overflow-auto">
      {this.props.applications.length > 0 ?
        <table className="uk-table uk-table-hover uk-table-divider">
          <thead>
            <tr>
              <th>Company</th>
              <th>Date</th>
              <th className="uk-table-expand">Action</th>
              <th className="uk-table-shrink">Completed</th>
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


export default connect(mapStateToProps, { getApplications, setCurrentApplication, removeItem })(ApplicationsTable)
