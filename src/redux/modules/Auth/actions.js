import { reset, SubmissionError } from 'redux-form';
import ApiServices from '../../../services/Api'

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
    return ApiServices.post('/users', user)
      .then(response => {
        const { user, token } = response
        localStorage.setItem('token', JSON.stringify(token))
        dispatch(authSuccess(user))
        dispatch(reset('signup'))
        router.history.replace('/applications')
      })
      .catch((err) => {
        console.log(err)
        dispatch(authFailure(err))
        throw new SubmissionError(err)
      })
  }
}

export const login = (user, router) => {
  return dispatch => {
    dispatch(authRequest());
<<<<<<< HEAD
    return ApiServices.post(`/auth`, user)
=======
    return ApiService.post(`/auth`, user)
>>>>>>> 1637b1a285a0e98f441c149d3b0fecdf98b84ac2
      .then(response => {
        const { user, token } = response;
        localStorage.setItem('token', JSON.stringify(token));
        dispatch(authSuccess(user))
        dispatch(reset('login'));
        router.history.replace('/applications');
      })
      .catch((errors) => {
        console.log(errors)
        dispatch(authFailure(errors))
      })
  }
}

export const logout = (router) => {
  localStorage.removeItem('token')
  router.history.replace('/')
  return { type: 'LOGOUT' }
}
