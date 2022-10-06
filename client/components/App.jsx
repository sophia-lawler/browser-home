import React, { useState, useEffect } from 'react'
import Weather from './Weather'
import AppDate from './Date'
import Background from './Background'

function App() {
  return (
    <>
      <Background className="container" />
      <Weather/>
      <AppDate/>
    </>
  )
}

export default App
