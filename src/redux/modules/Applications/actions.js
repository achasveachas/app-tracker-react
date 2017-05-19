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
