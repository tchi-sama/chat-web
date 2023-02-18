import { Avatar, Badge, IconButton } from "@mui/material";
import ChatinList from "./ChatinList";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "../context/AuthContext";
import { useContext, useEffect, useState } from "react";
import { ChatContext } from "../context/ChatContext";

function ChatList() {
  const [chats, setChats] = useState([]);
  const { currentUser } = useContext(AuthContext);
  const {dispatch} = useContext(ChatContext);
  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data());
      });
      return () => unsub();
    };
    currentUser.uid && getChats();
  }, [currentUser.uid]);
  const handleSelect = (u)=>{
    dispatch({type:"CHANGE_USER",payload:u})
  }
  console.log(Object.entries(chats)[0])
  return (
    <div className="p-2 flex overflow-x-auto flex-col items-start w-full gap-1">
      {
        Object.entries(chats)?.sort((a,b)=>b[1].date - a[1].date).map((chat)=>(
        <ChatinList
          info={chat[1].usrInfo}
          handleSelect={handleSelect}
          key={chat[0]}
          id={chat[1].usrInfo?.uid}
          name={chat[1].usrInfo?.displayName}
          message={chat[1].lastMessage?.text}
          avatar={chat[1].usrInfo?.photoURL}
          uid={chat[1].usrInfo?.uid}
          date={chat[1].date}
          state={""}
        />
        ))
      }
    </div>
  );
}

export default ChatList;
