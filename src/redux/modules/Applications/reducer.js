const initialState = {
  applications: [],
  currentApplication: {}
}

export default (state = initialState, action) => {
  switch(action.type) {

    case 'ADD_APPLICATION':
      return {
        ...state,
        state.applications.concat(action.application)
      }

    case 'EDIT_APPLICATION':
      const application = state.applications.filter(a => a.id == action.application.id)[0]
      const editedApplication = Object.assign({}, action.application)
      return {
        ...state,
        state.applications: [
              ...state.applications.slice(0, action.index),
              editedApplication,
              ...state.applications.slice(action.index + 1)
            ]
        }
      }

    case 'DELETE_APPLICATION':
      return {

      }

    default:
      return state;
  }
}
