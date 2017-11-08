import 'whatwg-fetch'
import 'localforage'

let serverBaseUrl = 'http://blog.zt.grianchan.com/api/'

let post = (api, data) => {
  return new Promise((resolve, reject) => {
    let requestUrl = serverBaseUrl + api
    fetch(requestUrl, {
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        Authorization: localStorage.getItem('token') || '',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      mode: 'cors',
      credentials: 'include',
      body: JSON.stringify(data)
    })
      .then((response) => {
        // 处理登陆后的token
        if (response.headers.get('authorization')) {
          localStorage.setItem('token', response.headers.get('authorization'))
        }
        return response.json()
      })
      .then((json) => {
        console.log('post api: ' + api, data, json)
        if ('' + json.code !== '0') {
          reject(json)
        } else {
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
        Authorization: localStorage.getItem('token') || '',
        'Content-Type': 'application/json'
      },
      method: 'GET',
      mode: 'cors',
      credentials: 'include',
      body: JSON.stringify(data)
    })
      .then((response) => {
        // 处理登陆后的token
        if (response.headers.get('authorization')) {
          localStorage.setItem('token', response.headers.get('authorization'))
        }
        return response.json()
      })
      .then((json) => {
        console.log('get api: ' + api, data, json)
        if ('' + json.code !== '0') {
          reject(json)
        } else {
          resolve(json.data)
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
