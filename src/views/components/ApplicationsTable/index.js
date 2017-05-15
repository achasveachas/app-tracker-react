import React from 'react'
import ApplicationRow from '../ApplicationRow'

const ApplicationsTable = () =>
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
        <ApplicationRow />
        <ApplicationRow />
        <ApplicationRow />
      </tbody>

    </table>
  </div>


export default ApplicationsTable
