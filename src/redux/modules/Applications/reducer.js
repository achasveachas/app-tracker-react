const initialState = {
  applications: [],
  currentApplication: {}
}

export default (state = initialState, action) => {
  switch(action.type) {

    case 'ADD_APPLICATION':
      return {
        ...state,
      }

    case 'EDIT_APPLICATION':
      return {
        ...state,
      }

    case 'DELETE_APPLICATION':
      return {

      }

    default:
      return state;
  }
}
