import React from 'react'
import Weather from './Weather'
import AppDate from './Date'
import Background from './Background'
import Sticky from './Sticky'

function App() {
  return (
    <>
      <Background className="container" />
      <Weather/>
      <AppDate/>
      <Sticky/>
    </>
  )
}

export default App
