import { reset, SubmissionError } from 'redux-form';
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

export const newApplication = (application, user_id) => {
  return dispatch => {
    return ApiServices.post("/users/" + user_id + "/applications", application)
      .then(response => {
        const { application } = response
        dispatch(addApplication(application))
        dispatch(reset('application'))
      })
      .catch((errors) => {
        console.log(errors)
        throw new SubmissionError(errors)
      })
  }
}

export const updateApplication = (data, user_id, app_id) => {
  return dispatch => {
    return ApiServices.patch("/users/" + user_id + "/applications/" + app_id, data)
      .then(response => {
        const { application } = response
        dispatch(editApplication(application))
        dispatch(reset('application'))
      })
      .catch((errors) => {
        console.log(errors)
        throw new SubmissionError(errors)
      })
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

export const removeItem = (user_id, app_id) => {
  return dispatch => {
    return ApiServices.delete("/users/" + user_id + "/applications/" + app_id)
      .then((response) => {
        dispatch(gotApplications(response.applications))
      })
      .catch((errors) => {
        console.log(errors);
      })
  }
}
