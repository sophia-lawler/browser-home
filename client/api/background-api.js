import request from 'superagent'
const serverUrl = 'https://api.unsplash.com'
const clientId = 'I_2ZSyV25ScihERNuYWVc9APcopugwGul-5kEQT6KI4'

export function getBackground() {
  return request
    .get(`${serverUrl}/photos/random?client_id=${clientId}`)
    .set('Accept', 'application/json')
    .then((res) => {
      return res.body.urls.regular
    })
}
