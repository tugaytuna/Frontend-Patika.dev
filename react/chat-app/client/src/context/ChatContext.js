import {createContext, UseState} from "react";

const ChatContext = createContext();

export const ChatProvider = ({children}) => {

    const [messages, setMessages] = UseState([]);

    const values = {
        messages,
        setMessages,
    };


    return <ChatContext.Provider value={values}>{children}</ChatContext.Provider>
}


export default ChatContext;