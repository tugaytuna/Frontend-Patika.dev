import React from 'react'

function BMIHesapla() {
  return (
    <div>
      <label>Age</label>
      <input type={"text"}></input>
      <br></br>
      <label>Gender: </label>
      <input type={"radio"} id="female" name="Gender" value="Female" ></input>
      <label for="female" >Female</label>
      <input type={"radio"} id="male" name="Gender"  value="Male" ></input>
      <label for="male" >Male</label>
      <br></br>
      <label>Height</label>
      <input type={"text"}></input>
      
      <label>Weight</label>
      <input type={"text"}></input>
      

      <hr></hr>

    </div>
  )
}

export default BMIHesapla