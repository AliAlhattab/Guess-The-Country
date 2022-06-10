import React from 'react'
import './Main.scss'

function Main() {
  return (
    <div>
        <img src='https://cdn.britannica.com/68/7068-004-7848FEB4/Flag-Canada.jpg' alt='Country Flag'/>
        <div>
          <label>Guess the Country </label>
          <input type='text' name='name' id='name' placeholder='Guess the Country'/>
          <button>Submit</button>
        </div>
    </div>
  )
}

export default Main