import React, { useEffect, useState } from 'react'

function Sticky() {
  const startX = 979
  const startY = 24

  const [pos, setPos] = useState({ left: startX, top: startY })
  const [isDragging, setDragging] = useState(false)

  const isDraggingRef = React.useRef(isDragging)

  function setDraggingState(data) {
    isDraggingRef.current = data
    setDragging(data)
  }

  function onMouseDown(e) {
    setDraggingState(true)
    e.stopPropagation()
    e.preventDefault()
  }

  function onMouseMove(e) {
    if (isDraggingRef.current) {
      const rect = e.target.parentNode.getBoundingClientRect()
      const newLeft = e.pageX - rect.left - 20
      const newTop = e.pageY - rect.top - 20
      if (
        newLeft > 0 &&
        newTop > 0 &&
        newLeft < rect.width &&
        newTop < rect.height
      ) {
        setPos({
          left: newLeft,
          top: newTop,
        })
      } else setDraggingState(false)
    }
    e.stopPropagation()
    e.preventDefault()
  }

  function onMouseUp(e) {
    setDraggingState(false)
    e.stopPropagation()
    e.preventDefault()
  }

  useEffect(() => {
    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseup', onMouseUp)
  }, [])

  // useEffect(() => {
  //   console.log(pos)
  // }, [pos])

  return (
    <div style={pos} className="post-it" onMouseDown={onMouseDown}>
      <form>
        <input
          className="note"
          placeholder="Write down todays tasks"
          type="text"
          name="note"
          onMouseDown={(e) => e.stopPropagation()}
        ></input>

        <input
          className="note"
          placeholder="You can cross out a task by clicking it"
          type="text"
          onMouseDown={(e) => e.stopPropagation()}
        ></input>

        <input
          className="note"
          placeholder="Move me around too"
          type="text"
          onMouseDown={(e) => e.stopPropagation()}
        ></input>
      </form>
    </div>
  )
}

export default Sticky
