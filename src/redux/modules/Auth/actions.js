import { reset, SubmissionError } from 'redux-form'
import Api from '../../../services/Api'

// Actions

const authRequest = () => {
  return {
    type: 'AUTHENTICATION_REQUEST',
  }
}

const authSuccess = (user) => {
  return {
    type: 'AUTHENTICATION_SUCCESS',
    user: user
  }
}

const authFailure = (errors) => {
  return {
    type: 'AUTHENTICATION_FAILURE',
    errors: errors
  }
}


// async functions

export const signup = (user, router) => {
  return dispatch => {
    dispatch(authRequest())
    return Api.post('/users', user)
      .then(response => {
        const { user, token } = response
        localStorage.setItem('token', JSON.stringify(token))
        dispatch(authSuccess(user))
        dispatch(reset('signup'))
        router.history.replace('/applications')
      })
      .catch((err) => {
        console.log(err)
        throw new SubmissionError(err)
      })
  }
}
