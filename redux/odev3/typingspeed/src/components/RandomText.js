import React from 'react'
import './style.css'
import {useSelector, useDispatch} from 'react-redux'
import {nextOne} from '../redux/counterSlice'


function RandomText() {

const randomVocab = ["yeni","türkçe","hızlı","yazma","motive","klavye","müzik","bilgisayar","test","elma", "tugay", "selam", "merhaba", "deneme", "farklı", "kelime", "programlama", "sada"];
// const counter = 0;

const counter = useSelector((state) => state.counter.counterL)


  return (
    <div>
       <div className='RandomTextBox'>
        {randomVocab.map((item,index,kk) => {
            return(
                <a className={(counter != index || "bold")}>{kk[index]} </a>

            )
        })} 
       </div>





    </div>
  )
}

export default RandomText
