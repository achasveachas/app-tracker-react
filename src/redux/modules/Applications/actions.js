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
