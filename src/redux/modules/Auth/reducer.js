const initialState = {
  isAuthenticated: !!localStorage.token,
  isAuthenticating: false,
  currentUser: {}
}

export default (state = initialState, action) => {
  switch(action.type) {

    case 'AUTHENTICATION_REQUEST':
      return {
        ...state,
        isAuthenticating: true
      }

    case 'AUTHENTICATION_SUCCESS':
      return {
        isAuthenticated: true,
        isAuthenticating: false,
        currentUser: action.user
      }

    case 'AUTHENTICATION_FAILURE':
      return {
        isAuthenticated: false,
        isAuthenticating: false,
        errors: action.errors
      }

    default:
      return state;
  }
}
