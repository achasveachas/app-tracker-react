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
