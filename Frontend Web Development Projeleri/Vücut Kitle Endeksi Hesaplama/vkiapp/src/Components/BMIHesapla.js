import {useState, useEffect} from 'react'
import "./style.css"


function BMIHesapla() {

  const [age, setAge] = useState(0);
  const [height, setHeight] = useState(65);
  const [weight, setWeight] = useState(180);
  const [gender, setGender] = useState(1);
  


  const calculate = () => {
    //check inputs
    if (age < 2 || age > 120)
    {
      console.log("mistake")
    }





  }

  return (
    <div>
      <label>Age: </label>
      <input id='age' onClick={() => {if(age == "0"){setAge("")}}} type={"text"} onChange={(e) => {setAge(e.target.value)}} value={age}></input>
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
      <button onClick={calculate} className='calcBtn' >Calculate</button>  


    </div>
  )
}

export default BMIHesapla