import React, { useState, useEffect } from 'react'

function AppDate() {
  const today = new Date()
  const [date, setDate] = useState(today)


  useEffect(() => {
    setInterval(() => setDate(new Date()), 1000)
  }, [])

  function printDay() {
    const days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ]
    const dayIndex = date.getDay()
    return days[dayIndex]
  }

  return (
    <>
      <div className="date">
        <h1>
          {date.toLocaleTimeString('en-GB', {
            hour: 'numeric',
            minute: 'numeric',
          })}
        </h1>
        <h2>
          {printDay()}{' '}
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
