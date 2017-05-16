const initialState = {
  applications: [],
  currentApplication: null
}

export default (state = initialState, action) => {
  switch(action.type) {

    case 'SET_CURRENT_APPLICATION':
      return {
        ...state,
        currentApplication: state.applications.filter(app => app.id === action.app_id)
      }

    case 'GOT_APPLICATIONS':
      return {
        ...state,
        applications: action.applications
      }

    case 'ADD_APPLICATION':
      return {
        ...state,
        applications: state.applications.concat(action.application)
      }

    case 'EDIT_APPLICATION':
      const application = state.applications.filter(a => a.id === action.application.id)[0]
      const editedApplication = Object.assign({}, application, action.application)
      return {
        ...state,
        applications: [
              ...state.applications.slice(0, action.index),
              editedApplication,
              ...state.applications.slice(action.index + 1)
            ]
        }

    case 'DELETE_APPLICATION':
      return {
        ...state,
        applications: [
              ...state.applications.slice(0, action.index),
              ...state.applications.slice(action.index + 1)
            ]
      }

    default:
      return state;
  }
}
