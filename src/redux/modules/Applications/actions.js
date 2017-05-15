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

export const deleteApplication = (id) => {
  return {
    type: 'DELETE_APPLICATION',
    id: id
  }
}

export const getApplications = (user_id) => {
  return dispatch => {
    return ApiServices.get("/users/" + user_id + "/applications")
      .then(response => {
        dispatch(gotApplications(response.applications))
      })
      .catch((errors) => {
        console.log(errors);
      })
  }
}
