import {useState, useEffect} from 'react'
import "./style.css"


function BMIHesapla() {

  const [age, setAge] = useState(0);
  const [height, setHeight] = useState(180);
  const [weight, setWeight] = useState(65);
  const [gender, setGender] = useState(1);
  
  const [bmi, setBmi] = useState()


  const calculate = () => {
    //check inputs
    if (age < 2 || age > 120 || gender == 1 || weight < 20 || height < 40)
    {
      console.log("mistake")
    }
    else 
    {
      console.log(age,height,weight,gender)
      const calc = weight / (height * height)
      
      let newCalc = calc * 10000;
      newCalc = Number.parseFloat(newCalc).toFixed(2);

      setBmi(newCalc)

      makeResult();
      
    }

    function makeResult(){
      console.log("kk result")
    }
        

      

  }

  const testFonc = () => {
    setAge(24);
    setGender("Male");
    setHeight(170);
    setWeight(55);
  }


  const radioBtnClick = (e) => {
      setGender(e.target.value)
  }

  return (
    <div>
      <label>Age: </label>
      <input id='age' onClick={() => {if(age == "0"){setAge("")}}} type={"text"} onChange={(e) => {setAge(e.target.value)}} value={age}></input>
      <br></br>
      <label>Gender: </label>
      <input onClick={radioBtnClick}  className='radioButton' type={"radio"} id="female" name="Gender" value="Female" ></input>
      <label htmlFor="female" >Female</label>
      <input onClick={radioBtnClick} className='radioButton' type={"radio"} id="male" name="Gender"  value="Male" ></input>
      <label htmlFor="male" >Male</label>
      <br></br>
      <label>Height</label>
      <input onClick={() => {if(height == 180){setHeight("")}}} onChange={(e) => {setHeight(e.target.value)}} value={height} className='hewe' type={"text"}></input>
      
      <label>Weight</label>
      <input onClick={() => {if(weight == 65){setWeight("")}}} onChange={(e) => {setWeight(e.target.value)}} value={weight}  className='hewe' type={"text"}></input>

      <br></br>
      <button onClick={calculate} className='calcBtn' >Calculate</button>  

      <button onClick={testFonc} id='tempTest'>Test</button>

      <h1>{bmi} BMI</h1>
      

    </div>
  )
}

export default BMIHesapla