import './App.css';

import {useState, useEffect} from 'react'

function App() {


const [markdownSnip, setMarkdownSnip] = useState(`Heading
=======

Sub-heading
-----------

### Another deeper heading

Paragraphs are separated
by a blank line.

Leave 2 spaces at the end of a line to do a
line break

Text attributes *italic*, **bold**,
'monospace', ~~strikethrough~~ .

Shopping list:

  * apples
  * oranges
  * pears

Numbered list:

  1. apples
  2. oranges
  3. pears

The rain---not the reign---in
Spain.

 *[Herman Fassett](https://freecodecamp.com/hermanfassett)*`)


const [inputText, setinputText] = useState("")

const clickedHint = () => {
  setinputText(markdownSnip)
}


  return (
    <div className='allB'>
      <h1 className='headerT'>Markdown Previewer</h1>

      <div className='textandmark'>
        <input value={inputText} onChange={(e) => {setinputText(e.target.value)}}  className='text' type="text"></input>
        <div className='markdown'>
          markdown
        </div>
      </div>

      <button onClick={clickedHint} className='question'>?</button>
    </div>
  );
}

export default App;
