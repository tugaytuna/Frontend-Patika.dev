import React from 'react'

import "../App.css"

function SearchNotes() {
  return (
    <div>
      <h1 className='text-4xl font-bold'>NotesApp</h1>
      <input type="text" name="noteSearch" id="search" className="centerB block rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="search notes..."/>

    </div>
  )
}

export default SearchNotes