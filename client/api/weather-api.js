import request from 'superagent'

export function getWeather(city) {
  return request
    .get('https://goweather.herokuapp.com/weather/' + city)
    .set('Accept', 'application/json')
    .then((response) => {
      return JSON.parse(response.text)
    })
    .catch((err) => {
      console.error(err.message)
    })
}
