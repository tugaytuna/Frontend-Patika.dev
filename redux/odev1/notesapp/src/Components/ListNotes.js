import React from 'react'

import {useSelector} from 'react-redux'
// import {searchText} from './SearchNotes'

function ListNotes() {

const notesValue = useSelector((state) => state.notes.value)

const filterValue = useSelector((state) => state.search.value)

const filteredNotes = [];
// const filterNotes = () => {
//   notesValue.filter((item) => {
//       // (item.noteDetail.includes(filterValue)) ? item : null;
//       console.log(filterValue, "en güncel");
//       if (item.noteDetail.includes(filterValue)) {
//         // filteredNotes.push(item);
//       }
//   })
// }

const filterNotes = notesValue.filter((item) => {
      // (item.noteDetail.includes(filterValue)) ? item : null;
     
      if (item.noteDetail.includes(filterValue)) {
        // filteredNotes.push(item);
        // console.log(filterValue)
          return item
      }
  })




  return (
    <div>
      {filterNotes.map((item, index) => {
        return(
        <div key={item.id} className={`noteList ${item.color}`}>
        <h2 key={index}>{item.id}</h2>
        <h1 key={item.noteDetail}>{item.noteDetail}</h1>
        {/* <h2 key={item.color}>{filterValue}</h2> */}
        
        </div>
        )
      })}
      
    
    </div>
  )
}

export default ListNotes