import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { login } from '../../redux/modules/Auth/actions'
import UserForm from '../Forms/user'


class Login extends Component {

  static contextTypes = {
    router: PropTypes.object
  }

  handleLogin = data => this.props.login({user: data}, this.context.router)

  render() {
    return(
      <div className="uk-position-center">
        <h2 className="uk-heading-line uk-text-center"><span>Log In:</span></h2>
        <UserForm action="login" onSubmit={this.handleLogin} errors={this.props.authErrors}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    authErrors: state.auth.errors
  }
}

export default connect(mapStateToProps, { login })(Login)
