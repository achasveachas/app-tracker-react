import fetch from 'isomorphic-fetch'

const BASE_URL = 'https://app-tracker-api.herokuapp.com/api/v1'

const parseResponse = (response) => {
  return response.json()
    .then(json => {
      if (!response.ok) {
        return Promise.reject(json.errors)
      }

      return json
    })
}

export default {

  get(url) {
    const headers =  {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
    return fetch(`${BASE_URL}${url}`, {
      method: 'GET',
      headers: headers
    })
    .then(parseResponse)
  },

  post(url, data ={}, token) {
    const body = JSON.stringify(data)

    const headers =  {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer: ${token}`
    }

    return fetch(`${BASE_URL}${url}`, {
      method: 'POST',
      headers: headers,
      body: body
    })
    .then(parseResponse)
  },

  patch(url, data ={}, token) {
    const body = JSON.stringify(data)

    const headers =  {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer: ${token}`
    }

    return fetch(`${BASE_URL}${url}`, {
      method: 'PATCH',
      headers: headers,
      body: body
    })
    .then(parseResponse)
  },

  delete(url, token) {
    const headers =  {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer: ${token}`
    }
    return fetch(`${BASE_URL}${url}`, {
      method: 'DELETE',
      headers: headers
    })
  }
}
