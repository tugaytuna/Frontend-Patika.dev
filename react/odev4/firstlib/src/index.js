import React from 'react'
import styles from './styles.module.css'

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

export const Button1 = ({text}) => {
  return(
   <div>
    <button className={styles.button}>{text}</button>
  </div>
  )
  
}
