import React, {Component} from 'react'
import { connect } from 'react-redux'

import ApplicationRow from '../ApplicationRow'

class ApplicationsTable extends Component {

  constructor(props) {
    super(props)
  }

  render() {

    const RenderedRows = this.props.applications.map(app => <ApplicationRow application={app} />)

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


export default connect(mapStateToProps)(ApplicationsTable)
