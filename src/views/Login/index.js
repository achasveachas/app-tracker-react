import React from 'react'
import { connect } from 'react-redux';
import UserForm from '../Forms/user'


const Login = () =>
  <div className="uk-position-center">
    <h2 className="uk-heading-line uk-text-center"><span>Log In:</span></h2>
    <UserForm action="login" errors={this.props.errors}/>
  </div>


const mapStateToProps = (state) => {
  return {
    authErrors: state.auth.errors
  }
}

export default connect(mapStateToProps)(Login)
