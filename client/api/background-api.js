import request from 'superagent'
const serverUrl = 'https://api.unsplash.com'
const clientId = '2R_wf7s7eJzb0Btc1Md67KR2yjwWR5fj59pIxcDuaUA'

export function getBackground() {
  return request
    .get(`${serverUrl}/photos/random?client_id=${clientId}`)
    .set('Accept', 'application/json')
    .then((res) => {
      return res.body.urls.regular
    })
}
