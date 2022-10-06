import {useState} from 'react'

import styles from "./styles.module.css"
import {sendMessage} from "..//socketApi"
import { useChat } from '../context/ChatContext'

function ChatForm() {

  const [message, setmessage] = useState("")

  const {setMessages} = useChat();

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(message)

    setMessages((prevState) => [...prevState,{message, fromMe:true}]);
    sendMessage(message);

    setmessage("")
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input className={styles.textInput} value={message} onChange={(e) => {setmessage(e.target.value)}}></input>
      </form>
    </div>
  )
}

export default ChatForm