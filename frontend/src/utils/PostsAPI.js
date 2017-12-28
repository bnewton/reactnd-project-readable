const api = process.env.REACT_APP_CONTACTS_API_URL || 'http://localhost:3001'

let token = localStorage.token

if (!token)
token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Authorization': 'Basic '+btoa('werwrw:er34234'), 
  'Content-Type': 'application/x-www-form-urlencoded'
}

export const getAll = () => 
  fetch(`${api}/posts`, {headers})
  .then(res => res.json())

export const getPostById = (id) =>
  fetch(`${api}/posts/${id}`, {headers})
  .then(res => res.json())

  export const getAllCommentsForPost = (id) =>
  fetch(`${api}/posts/${id}/comments`, {headers})
  .then(res => res.json())