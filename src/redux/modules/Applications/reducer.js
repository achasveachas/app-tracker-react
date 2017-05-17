const initialState = {
  applications: [],
  currentApplication: {}
}

export default (state = initialState, action) => {
  switch(action.type) {

    case 'SET_CURRENT_APPLICATION':
      return {
        ...state,
        currentApplication: state.applications.filter(app => app.id === action.app_id)[0]
      }

    case 'CLEAR_CURRENT_APPLICATION':
      return {
        ...state,
        currentApplication: {}
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
      const index = state.applications.findIndex(a => a.id === action.application.id)
      const editedApplication = Object.assign({}, application, action.application)
      return {
        applications: [
              ...state.applications.slice(0, index),
              editedApplication,
              ...state.applications.slice(index + 1)
            ],
            currentApplication: {}
        }

    case 'DELETE_APPLICATION':
      const deleteIndex = state.applications.findIndex(a => a.id === action.id)
      return {
        applications: [
              ...state.applications.slice(0, deleteIndex),
              ...state.applications.slice(deleteIndex + 1)
            ],
            currentApplication: {}
      }

    default:
      return state;
  }
}
