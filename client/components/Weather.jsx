import React, { useState, useEffect } from 'react'
import { getWeather, getWeatherByCoords } from '../api/weather-api'

function Weather() {
  const [weather, setWeather] = useState({
    temperature: '',
    description: '',
    wind: '',
  })
  const [city, setCity] = useState('')
  const [input, setInput] = useState('')

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords
      getWeatherByCoords(latitude, longitude)
        .then((res) => {
          setCity(res.name)
          setWeather({
            temperature: res.main.temp,
            description: res.weather[0].description,
            icon: res.weather[0].icon,
          })
          return null
        })
        .catch((err) => {
          console.error(err.message)
        })
    })
  }, [])

  function handleChange(event) {
    setInput(event.target.value)
  }
  function weatherClick() {
    input && setCity(input)
    getWeather(city)
      .then((res) => {
        setWeather({
          temperature: res.main.temp,
          description: res.weather[0].description,
          icon: res.weather[0].icon,
        })
        return null
      })
      .finally(setInput(''))
      .catch((err) => {
        console.error(err.message)
      })
  }
  return (
    city && (
      <>
        <div className="weather">
          <p className="temp">
            The temperature in {city} is {weather.temperature}
          </p>
          <p className="temp">
            <img
              alt="icon"
              src={`http://openweathermap.org/img/w/${weather.icon}.png`}
            />{' '}
            {weather.description}{' '}
          </p>

          <input
            value={input}
            onChange={handleChange}
            name="city"
            type="text"
            size="10"
          />
          <button style={{ height: '30px' }} onClick={weatherClick}>
            search
          </button>
        </div>
      </>
    )
  )
}

export default Weather
