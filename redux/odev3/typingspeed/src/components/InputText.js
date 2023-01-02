import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { nextOne, stopTimer, startTimer, tickMinus } from '../redux/counterSlice'

function InputText() {

  const counter = useSelector((state) => state.counter.counterL)
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState("");
  const [startStop, setStartStop] = useState("Start")
  const timerRe = useSelector((state) => state.timer.timerL)

 


  const spaceAdded = (e) => {
    setTextInput(e.target.value);

    if (e.target.value.includes(" ")) {
      setTextInput("");
      dispatch(nextOne())
    }

    console.log(counter)

  }


  const timerTick = () => {
    if (startStop == "Start")
    {
      dispatch(startTimer())
      
      setInterval(() => {
        dispatch(tickMinus())
      },1000)
  

    }
    else if (startStop == "Stop")
    {
      dispatch(stopTimer())
      
    }



    
    

  }

  const buttonClick = () => {

    setStartStop((startStop == "Stop") ? "Start" : "Stop")

    timerTick();
  }

  return (
    <div>
      <a>{counter + 1}. Kelime</a>
      <input value={textInput} onChange={spaceAdded} ></input>
      <label className='timer'>{timerRe}</label>
      <button className='startbutton' onClick={buttonClick}>{startStop}</button>
    </div>
  )
}

export default InputText