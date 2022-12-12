import {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {nextOne} from '../redux/counterSlice'

function InputText() {

const counter = useSelector((state) => state.counter.counterL)
const dispatch = useDispatch();
const [textInput, setTextInput] = useState("");

const spaceAdded = (e) => {
    setTextInput(e.target.value);
    
    if (e.target.value.includes(" ")){
        setTextInput("");
        dispatch(nextOne())
    }

    console.log(counter)

}


  return (
    <div>
        <a>{counter + 1}. Kelime</a>
        <input value={textInput} onChange={spaceAdded} ></input>
    </div>
  )
}

export default InputText