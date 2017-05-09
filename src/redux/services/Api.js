import fetch from 'isomorphic-fetch'

const BASE_URL = 'https://sleepy-cove-46703.herokuapp.com/api/v1/'

const token = JSON.parse(localStorage.getItem('token'))

const headers =  {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'Authorization': `Bearer: ${token}`
}

const parseResponse = (response) => {
  return response.json()
    .then(json) => {
      if (!response.ok) {
        return Promise.reject(json.errors)
      }

      return json
    }
}
