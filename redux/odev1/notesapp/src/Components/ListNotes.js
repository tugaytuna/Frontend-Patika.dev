import React from 'react'

import {useSelector} from 'react-redux'


function ListNotes() {

const notesValue = useSelector((state) => state.notes.value.noteDetail)

  return (
    <div>{notesValue}</div>
  )
}

export default ListNotes