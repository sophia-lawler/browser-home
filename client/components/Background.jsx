import React, { useEffect } from 'react'
import { getBackground } from '../api/background-api'

function Background () {

  useEffect(() => {
    getBackground()
      .then(imgUrl => {
        document.body.style.backgroundImage = `url(${imgUrl})`
        return null
      })
      .catch(err => {
        console.error(err)
      })
  }, [])

  return (
    <>
    </>
  )
}

export default Background
