import ApiServices from '../../../services/Api'


export const gotApplications = (applications) => {
  return {
    type: 'GOT_APPLICATIONS',
    applications: applications
  }
}

export const addApplication = (application) => {
  return {
    type: 'ADD_APPLICATION',
    application: application
  }
}

export const editApplication = (application) => {
  return {
    type: 'EDIT_APPLICATION',
    id: application.id,
    application: application
  }
}

export const setCurrentApplication = (app_id) => {
  return {
    type: 'SET_CURRENT_APPLICATION',
    app_id: app_id
  }
}

export const clearCurrentApplication = () => {
  return {
    type: 'CLEAR_CURRENT_APPLICATION'
  }
}

export const deleteApplication = (id) => {
  return {
    type: 'DELETE_APPLICATION',
    id: id
  }
}

// Async actions


export const removeItem = (user_id, app_id) => {
  return dispatch => {
    return ApiServices.delete("/users/" + user_id + "/applications/" + app_id)
      .then(() => {
        dispatch(deleteApplication(app_id))
      })
      .catch((errors) => {
        console.log(errors);
      })
  }
}
