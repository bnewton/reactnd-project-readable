const api = process.env.REACT_APP_CONTACTS_API_URL || 'http://localhost:3001'

let token = localStorage.token

if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

export const getAll = () => 
  fetch(`${api}/posts`, {headers})
  .then(res => res.json())
  .then(data => data.posts)

export const create = (body) =>
  fetch(`${api}/posts`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
      body: JSON.stringify(body) 
    }).then(res => res.json())
  
export const findPostById = (post) =>
  fetch(`${api}/posts/${post.id}`, {headers})
  .then(res => res.json())
  .then(data => data.post)

  export const edit = (body) =>
  fetch(`${api}/posts`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
      body: JSON.stringify(body) 
    }).then(res => res.json())  