
import React from 'react'
import ApplicationsTable from '../components/ApplicationsTable'
import NewApplicationButton from '../components/NewApplicationButton'

const Dashboard = () =>
  <div>
    <h1 className="uk-heading-line uk-text-center uk-padding"><span>My Job Dashboard</span></h1>
    <NewApplicationButton />
    <ApplicationsTable />
    <NewApplicationButton />
  </div>


export default Dashboard
