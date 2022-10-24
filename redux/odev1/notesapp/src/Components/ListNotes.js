import React from 'react'

import {useSelector} from 'react-redux'


function ListNotes() {

const notesValue = useSelector((state) => state.notes.value)

  return (
    <div>
      {notesValue.map((item, index) => {
        return(
          <div key={item.id} className={`noteList ${item.color}`}>
        <h2 key={index}>{item.id}</h2>
        <h1 key={item.noteDetail}>{item.noteDetail}</h1>
        {/* <h2 key={item.color}>{item.color}</h2> */}
       
        </div>
        )
      })}
      
      

    </div>
  )
}

export default ListNotes