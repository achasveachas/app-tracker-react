import React from 'react'

const  About = () =>
    <div className="uk-position-center uk-margin-large-top">
      <h1 className="uk-heading-line uk-text-center"><span>About This App</span></h1>
      <p className="uk-text-center uk-padding-large uk-padding-remove-vertical">
        This is a job tracking application where job applicants can keep track of the different applications they've submitted, and the various actions they've taken in regards to said applications (e-mails, communications, meetings, interviews, etc.)
      </p>
      <h3 className="uk-text-lead uk-text-center">Technical Specs</h3>
      <p className="uk-text-center uk-padding-large uk-padding-remove-vertical">
        This app was built using <strong>ReactJS</strong>.

        It uses a <strong>Rails API</strong> with a <strong>PostgreSQL</strong> database for the back end. The API can be found <a href="https://app-tracker-api.herokuapp.com/api/v1/">Here</a>, and documentation for the API can be found in its GitHub README <a href="https://github.com/achasveachas/app-tracker/blob/master/doc/documentation.md">Here</a>.
        <br/><br/>
        This project was bootstrapped using <a href="https://github.com/facebookincubator/create-react-app">Create React App</a>.
        <br/>
        The styling for this app was bootstrapped using <a href="(https://getuikit.com/">UIkit</a>
      </p>
      <h3 className="uk-text-lead uk-text-center">Contributing</h3>
      <p className="uk-text-center uk-padding-large uk-padding-remove-vertical">
        Bug reports and pull requests are welcome on <a href="https://github.com/achasveachas/app-tracker-react">GitHub</a> or by email to <a href="mailto:projects@yechiel.me">projects@yechiel.me</a>.<br/>
        This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the <a href="http://contributor-covenant.org/">Contributor Covenant</a> code of conduct.
      </p>
      <h3 className="uk-text-lead uk-text-center">Contact</h3>
      <p className="uk-text-center uk-padding-large uk-padding-remove-vertical">
        Yechiel Kalmenson can be contacted by email at <a href="mailto:contact@yechiel.me">contact@yechiel.me</a>, or through his website <a href="http://yechiel.me/">Yechiel.me</a>.<br/>
        Links to his social media can be found on the site as well.
      </p>
    </div>

export default About
