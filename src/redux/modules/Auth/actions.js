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

export const authFailure = (errors) => {
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
        router.history.replace('/dashboard')
      })
      .catch((errors) => {
        console.log(errors)
        dispatch(authFailure(errors))
        throw new SubmissionError(errors)
      })
  }
}

export const login = (user, router) => {
  return dispatch => {
    dispatch(authRequest());
    return ApiServices.post(`/auth`, user)
      .then(response => {
        const { user, token } = response;
        localStorage.setItem('token', JSON.stringify(token));
        dispatch(authSuccess(user))
        dispatch(reset('login'));
        router.history.replace('/dashboard');
      })
      .catch((errors) => {
        console.log(errors)
        dispatch(authFailure(errors))
        throw new SubmissionError(errors)
      })
  }
}

export const authenticate = () => {
  return dispatch => {
    dispatch(authRequest())
    return ApiServices.post('/auth/refresh')
      .then(response => {
        const { user, token } = response
        localStorage.setItem('token', JSON.stringify(token))
        dispatch(authSuccess(user))
      })
      .catch((errors) => {
        console.log(errors);
        dispatch(authFailure(errors))
        localStorage.removeItem('token')
      })
  }
}

export const logout = (router) => {
  localStorage.removeItem('token')
  router.history.replace('/')
  return { type: 'LOGOUT' }
}
