import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { signup } from '../../redux/modules/Auth/actions'
import UserForm from '../Forms/user'


class Signup extends Component {

  static contextTypes = {
    router: PropTypes.object
  }

  handleSignup = data => this.props.signup({user: data}, this.context.router)

  render() {
    return(
      <div className="uk-position-center">
        <h2 className="uk-heading-line uk-text-center"><span>Sign Up:</span></h2>
        <UserForm action="signup" onSubmit={this.handleSignup} errors={this.props.authErrors}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    authErrors: state.auth.errors
  }
}

export default connect(mapStateToProps, { signup })(Signup)
