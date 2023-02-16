import { doc, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect } from "react";
import { ChatContext } from "../context/ChatContext";
import { db } from "../firebase";
import Msg from "./Msg";

function MsgsViewer() {
    const {data} = useContext(ChatContext);
    const [msgs, setMsgs] = React.useState([]);


    useEffect(() => {
        const unSub = onSnapshot(doc( db , "chats", data.chatId),(doc)=>{
            doc.exists() && setMsgs(doc.data().messages)
        })
    
      return () => {
        unSub();
      }
    }, [data.chatId])
    
  return (
    <main className="py-24 p-5 h-full overflow-y-auto msgsviewr">
        {
            msgs.map((msg, index) => (
                <Msg key={index} msg={msg} />
            ))
        }
    </main>
  );
}

export default MsgsViewer;
