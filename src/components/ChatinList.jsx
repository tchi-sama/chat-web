import { Avatar, Badge } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { ChatContext } from "../context/ChatContext";

function ChatinList({ handleSelect,info, id,avatar,name, message, state }) {
  
  return (
    <>
    <div onClick={()=>handleSelect(info)} className="  hover:bg-[#191921] flex gap-3 p-2 w-full rounded-lg cursor-pointer">
      <Badge variant="dot" overlap="circular" color="primary" badgeContent=" ">
        <Avatar
          sx={{ width: 50, height: 50 }}
          src={avatar}
        />
      </Badge>
      <div className="flex-1">
        <div className="flex ">
          <h3 className="text-white flex-1">{name}</h3>
          {
            (typeof(state)==="number" && state !== 0 )? 
            <p className="flex justify-center items-center px-2 bg-prime w-fit rounded-full text-sm text-white">
              {typeof state === "number" ? state : ""}
            </p>
            : null
          }
        </div>
        <div className="flex items-end">
          <p className="text-white opacity-30 text-sm flex-1">
            {message && (message?.substr(0, 12) + (message?.length > 12 ? "..." : ""))}
          </p>
          <p className="text-white opacity-30 text-xs">2:15 Am</p>
        </div>
      </div>
    </div>
      <div className="w-[80%] h-[0.8px] rounded-full bg-gray-800 opacity-60 mx-auto"></div>
    </>
  );
}

export default ChatinList;
