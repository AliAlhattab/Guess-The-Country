import React from 'react'
import './Counter.scss'

let score = 0;

function Counter() {
  return (
    <div>
        <h2>Score: {score}</h2>
    </div>
  )
}

export default Counter