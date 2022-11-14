import './App.css';
import {useState, useEffect} from 'react'
import axios, {isCancel, AxiosError} from 'axios';


function App() {

const [parag, setParag] = useState("");
const [paragCount, setParagcount] = useState(4);
const [paragAPI, setParagAPI] = useState("init value");
const [selectedHTML, setselectedHTML] = useState(1);

useEffect(() => {
  const urlAPI = `https://baconipsum.com/api/?type=all-meat&paras=${paragCount}&format=${(selectedHTML) ? "html" : "text"}`


  axios.get(urlAPI)
  .then(function (response) {
    // handle success
    setParagAPI(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });


},[paragCount, selectedHTML])


const changeParagCount = (e) => {
  setParagcount(e.target.value)

}


  return (
    <div className="App">
    <h1>React sample text generator app</h1>
    <hr></hr>

      <div className="general">
        <div className="paragraphs">
          <h5>Paragraphs</h5>
          <input value={paragCount} onChange={changeParagCount}  type="number"></input>
        </div>
        <div className="inhtml">
          <h5>include HTML</h5>
          <button className={(selectedHTML) ? "yesbutton selectedButton" : "yesbutton"} onClick={() => {setselectedHTML(1)}}>YES</button>
          <button className={(!selectedHTML) ? "nobutton selectedButton" : "nobutton"} onClick={() => {setselectedHTML(0)}} >NO</button>
        </div>
        
      </div>
      <div className="text">
          <label>{paragAPI}</label>
        </div>
     
    </div>
  );
}

export default App;

