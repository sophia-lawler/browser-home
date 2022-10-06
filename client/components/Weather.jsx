import React, { useState, useEffect } from 'react'
import { getWeather } from '../api/weather-api'

function Weather() {
  const [weather, setWeather] = useState({
    temperature: '',
    description: '',
    wind: '',
  })
  const [city, setCity] = useState('auckland')

  useEffect(() => {
    weatherClick()
  }, [])

  function handleChange(event) {
    setCity(event.target.value)
  }
  function weatherClick() {
    getWeather(city)
      .then((res) => {
        setWeather({
          temperature: res.temperature,
          description: res.description,
          wind: res.wind,
        })
        return null
      })
      .catch((err) => {
        console.error(err.message)
      })
  }

  return (
    <>
      <div className="weather">
        <p id="temp">{weather.temperature}</p>
        <p>
          {city} is {weather.description}{' '}
        </p>
        <p>Wind: {weather.wind}</p>
        <input
          value={city}
          onChange={handleChange}
          name="city"
          type="text"
          size="10"
        />
        <button style={{ height: '30px' }} onClick={weatherClick}>
          Update
        </button>
      </div>
    </>
  )
}

export default Weather
