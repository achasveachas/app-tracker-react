import React from 'react'

export default function Home(props) {
  return (
    <div className="uk-position-center">
      <h1 className="uk-heading-line uk-text-center"><span>Welcome To My Job Application Tracker</span></h1>
      {
        props.isAuthenticated ?
          <h3 className="uk-heading-line uk-text-center"><span>Please <a className="uk-link-muted" href='/signup'>sign up</a> or <a className="uk-link-muted" href='/login'>log in</a> to use</span></h3>
        :
          <h3 className="uk-heading-line uk-text-center"><span>Click <a className="uk-link-muted" href='/applications'>here</a> to see your job applications.</span></h3>
      }
    </div>
)}
