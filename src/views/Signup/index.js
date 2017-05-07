import React from 'react'
import { connect } from 'react-redux';
import UserForm from '../Forms/user'


const Signup = () =>
  <div className="uk-position-center">
    <h2 className="uk-heading-line uk-text-center"><span>Sign Up:</span></h2>
    <UserForm action="signup" />
  </div>

export default Signup;
