import React from 'react'
import './Main.scss'

function Main({ randomCountry }) {
  console.log(randomCountry);
  return (
    <div>
        <img alt='Country Flag'/>
        <div>
          <label>Guess the Country </label>
          <input type='text' name='name' id='name' placeholder='Guess the Country'/>
          <button 
          onClick={() => {
            randomCountry.clickHandler()
          }}
          >
            Submit</button>
        </div>
    </div>
  )
}

export default Main