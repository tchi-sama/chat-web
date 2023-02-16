import { Avatar, Badge, IconButton } from "@mui/material";
import ChatinList from "./ChatinList";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "../context/AuthContext";
import { useContext, useEffect, useState } from "react";

function ChatList() {
  const [chats, setChats] = useState([]);
  const { currentUser } = useContext(AuthContext);
  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data());
      });
      return () => unsub();
    };
    currentUser.uid && getChats();
  }, [currentUser.uid]);
  return (
    <div className="p-2 flex overflow-x-auto flex-col items-start w-full gap-1">
      {
        Object.entries(chats)?.map((chat)=>(
        <ChatinList
          key={chat[0]}
          id={chat[1].usrInfo.uid}
          name={chat[1].usrInfo.displayName}
          message={""}
          avatar={chat[1].usrInfo.photoURL}
          uid={chat[1].usrInfo.uid}
          state={""}
        />
        ))
      }
    </div>
  );
}

export default ChatList;
