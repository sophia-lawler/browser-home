import React, { useState, useEffect } from 'react'

function AppDate() {
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    setInterval(() => setDate(new Date()), 1000)
  }, [])

  return (
    <>
      <div className="date">
        <h1 className="time">
          {date.toLocaleTimeString('en-GB', {
            hour: 'numeric',
            minute: 'numeric',
          })}
        </h1>
        <h2 className="day">
          {new Date().toLocaleString('en-us', { weekday: 'long' })}{' '}
          {date.toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'long',
          })}
        </h2>
      </div>
    </>
  )
}

export default AppDate
