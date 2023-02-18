import { Avatar, IconButton } from "@mui/material";
import React, { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";

function Msg({ msg }) {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);
  const ref = useRef();
  useEffect(()=>{
    ref.current?.scrollIntoView({ behavior: "smooth" });
  },[msg])
  return (
      <div  className={
              msg.senderId === currentUser.uid
                ? "py-2 flex gap-2 justify-start items-start hover:px-2 duration-200"
                : "py-2 flex gap-2 justify-start items-start hover:px-2 duration-200"
        
        }>
        <IconButton>
          <Avatar
            src={
              msg.senderId === currentUser.uid
                ? currentUser.photoURL
                : data.user.photoURL
            }
          />
        </IconButton>
        <div className="flex flex-col gap-1">
          <div className="flex w-full justify-between items-end">
            {/* <h1 className="text-white">{
              msg.senderId === currentUser.uid
                ? currentUser.displayName
                : data.user.displayName
            }</h1> */}
          </div>
          {msg?.text && (
            <p ref={ref} className="shadow-2xl w-fit text-sm text-white p-2 px-3 bg-[#20222b] rounded-xl">
              {msg.text}
            </p>
          )}
          {msg?.image && (
            <img ref={ref} className="rounded-2xl max-w-[250px] " src={msg?.image}></img>
          )}
            <span className="text-xs text-gray-400">{new Date(msg?.date).getHours()+":" + new Date(msg?.date).getMinutes()}</span>
        </div>
        <div ></div>
      </div>
  );
}

export default Msg;
