import { reset, SubmissionError } from 'redux-form';
import ApiServices from '../../services/Api'

// Actions

const authRequest = () => {
  return {
    type: 'AUTHENTICATION_REQUEST',
  }
}

const authSuccess = (user, token) => {
  return {
    type: 'AUTHENTICATION_SUCCESS',
    user: user,
    token: token
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
        localStorage.setItem('token', token)
        dispatch(authSuccess(user, token))
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
        localStorage.setItem('token', token);
        dispatch(authSuccess(user, token))
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

export const authenticate = (token) => {
  return dispatch => {
    dispatch(authRequest())
    return ApiServices.post('/auth/refresh', null, token)
      .then(response => {
        const { user, token } = response
        localStorage.setItem('token', JSON.stringify(token))
        dispatch(authSuccess(user, token))
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
