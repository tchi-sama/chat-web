
import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState  } from "react";
import { auth } from "../firebase";

export const ChatContext = createContext();

export const ChatContextProvider = ({ children }) => {
    const [ChatUser, setChatUser] = useState(null);

    return(
        <ChatContext.Provider value={{ChatUser,setChatUser}}>
            {children}
        </ChatContext.Provider>
            )
}