import React from 'react'
import './Main.scss'

function Main({ randomCountry, submit}) {
  return (
    <div>
        <img src={randomCountry.flags?.png} alt='Country Flag'/>
        <form onSubmit={submit}>
          <label>Guess the Country </label>
          <input type='text' name='name' id='name' placeholder='Guess the Country'/>
          <button>Submit</button>
        </form>
    </div>
  )
}

export default Main