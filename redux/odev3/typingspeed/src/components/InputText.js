import {useState} from 'react'


function InputText() {


const [textInput, setTextInput] = useState("");

const spaceAdded = (e) => {
    setTextInput(e.target.value);
    
    if (e.target.value.includes(" ")){
        setTextInput("");
        
    }


}


  return (
    <div>
        <a>asdsa</a>
        <input value={textInput} onChange={spaceAdded} ></input>
    </div>
  )
}

export default InputText