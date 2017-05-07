import React from 'react'
import { connect } from 'react-redux';
import UserForm from '../Forms/user'


const Login = () =>
  <div className="uk-position-center">
    <h2 className="uk-heading-line uk-text-center"><span>Log In:</span></h2>
    <UserForm action="login" />
  </div>

export default Login;
