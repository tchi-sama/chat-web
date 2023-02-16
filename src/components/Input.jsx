import { Avatar, IconButton } from "@mui/material";
import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

import { ReactComponent as SendIcon } from "../svgs/send.svg";
import { ReactComponent as LinkIcon } from "../svgs/link.svg";
import {
  arrayUnion,
  doc,
  serverTimestamp,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import { db, storage } from "../firebase";
import { v4 as uuid } from "uuid";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

function Msg({ msg }) {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const [text, setText] = React.useState("");
  const [image, setImage] = React.useState(null);

  const handleSend = async (e) => {
    e.preventDefault();
    if (image) {
      const storageRef = ref(storage, uuid());
      const uploadTask = uploadBytesResumable(storageRef, image);

      uploadTask.on(
        (err) => {},
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateDoc(doc(db, "chats", data.chatId), {
              messages: arrayUnion({
                id: uuid(),
                text,
                senderId: currentUser.uid,
                image: downloadURL,
                date: Date.now(),
              }),
            });
          });
        }
      );
    } else {
      await updateDoc(doc(db, "chats", data.chatId), {
        messages: arrayUnion({
          id: uuid(),
          text,
          senderId: currentUser.uid,
          date: Date.now(),
        }),
      });
    }

    await updateDoc(doc(db, "userChats", currentUser.uid), {
      [data.chatId + ".lastMessage"]: { text },
      [data.chatId + ".date"]: serverTimestamp(),
    });
    await updateDoc(doc(db, "userChats", data.user.uid), {
      [data.chatId + ".lastMessage"]: { text },
      [data.chatId + ".date"]: serverTimestamp(),
    });

    setText("");
    setImage(null);
  };

  return (
    <div>
      <form
        onSubmit={handleSend}
        className="flex items-center border-[#fff1] border z-50 rounded-xl absolute bottom-2 p-1  w-[calc(100%-60px)] left-[50%] translate-x-[-50%] bg-[#ffffff03] backdrop-blur-2xl "
      >
        <label htmlFor="file">
          <LinkIcon className="mx-2 icon3 rounded-full cursor-pointer" />
        </label>
        <input
          onChange={(e) => setImage(e.target.files[0])}
          id="file"
          name="file"
          type={"file"}
          className="hidden"
        />
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-full h-full bg-transparent outline-none text-white "
        />
        <button>
          <IconButton className="icon2">
            <SendIcon />
          </IconButton>
        </button>
      </form>
    </div>
  );
}

export default Msg;
