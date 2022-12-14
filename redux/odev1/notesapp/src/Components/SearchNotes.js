import {useState} from 'react'

import "../App.css"
import {useSelector, useDispatch} from 'react-redux'
import {setData} from '../Redux/notes/notesSlice'


function SearchNotes() {

  const [textIn, settextIn] = useState("")
  const dispatch = useDispatch();
  const searchValue = useSelector((state) => state.search.value)

  const textChange = (e) => {
    settextIn(e.target.value)
    // console.log(searchValue);
    dispatch(setData(textIn));
  }


  return (
    <div>
      <h1 className='text-4xl font-bold'>NotesApp</h1>
      <input onChange={textChange} value={textIn} type="text" name="noteSearch" id="search" className="centerB block rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="search notes..."/>

    </div>
  )
}

export default SearchNotes
// export const searchText = SearchNotes.textIn;