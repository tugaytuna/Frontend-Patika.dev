import React from 'react'

import "./style.css"

function BMIHesapla() {
  return (
    <div>
      <label>Age: </label>
      <input id='age' type={"text"}></input>
      <br></br>
      <label>Gender: </label>
      <input className='radioButton' type={"radio"} id="female" name="Gender" value="Female" ></input>
      <label htmlFor="female" >Female</label>
      <input className='radioButton' type={"radio"} id="male" name="Gender"  value="Male" ></input>
      <label htmlFor="male" >Male</label>
      <br></br>
      <label>Height</label>
      <input className='hewe' type={"text"}></input>
      
      <label>Weight</label>
      <input className='hewe' type={"text"}></input>

      <br></br>
      <button className='calcBtn' >Calculate</button>  

      <hr></hr>

    </div>
  )
}

export default BMIHesapla