import 'whatwg-fetch'
import 'localforage'

let serverBaseUrl = 'http://blog.zt.grianchan.com/api/'

let post = (api, data) => {
  return new Promise((resolve, reject) => {
    let requestUrl = serverBaseUrl + api
    fetch(requestUrl, {
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        Authorization: 'Bearer ' + localStorage.getItem('token') || '',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(data)
    })
      .then((response) => {
        console.log(response, response.headers)
        return response.json()
      })
      .then((json) => {
        if ('' + json.code !== '0') {
          reject(json)
        } else {
          console.log('json', json)
          resolve(json.data)
        }
      })
      .catch((error) => {
        reject(error)
      })
  })
}

let get = (api, data) => {
  return new Promise((resolve, reject) => {
    let requestUrl = serverBaseUrl + api
    fetch(requestUrl, {
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        Authorization: 'Bearer ' + localStorage.getItem('token') || '',
        'Content-Type': 'application/json'
      },
      method: 'GET',
      body: JSON.stringify(data)
    })
      .then((response) => {
        return response.json()
      })
      .then((json) => {
        if ('' + json.code !== '0') {
          reject(json)
        } else {
          resolve(json.result || {})
        }
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export default {
  post,
  get
}
