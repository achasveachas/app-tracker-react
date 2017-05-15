
import React, { Component} from 'react'
import ApplicationsTable from '../components/ApplicationsTable'
import NewApplicationButton from '../components/NewApplicationButton'

class Dashboard extends Component {

  constructor(props) {
    super(props)

    this.state = {
      currentApplication: null
    }
  }

  render() {
    return (
      <div>
        <h1 className="uk-heading-line uk-text-center uk-padding"><span>My Job Dashboard</span></h1>
        <NewApplicationButton />
        <ApplicationsTable />
        <NewApplicationButton />
      </div>
    )}
  }
export default Dashboard
