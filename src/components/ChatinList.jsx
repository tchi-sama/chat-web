import { Avatar, Badge } from "@mui/material";
import React from "react";

function ChatinList({userName , lastMsg , state}) {
  return (
    <div className="  hover:bg-[#191921] flex gap-3 p-2 w-full rounded-lg cursor-pointer">
      <Badge variant="dot" overlap="circular" color="primary" badgeContent=" ">
        <Avatar
          sx={{ width: 50, height: 50 }}
          src="https://picsum.photos/200/201"
        />
      </Badge>
      <div className="flex-1">
        <div className="flex ">
          <h3 className="text-white flex-1">{userName}</h3>
          <p className="flex justify-center items-center px-2 bg-prime w-fit rounded-full text-sm text-white">
            {typeof(state) === "number"? state : null}
          </p>
        </div>
        <div className="flex items-end">
          <p className="text-white opacity-30 text-sm flex-1">{lastMsg.substr(0, 12)+(lastMsg.length>12?"...":null)}</p>
          <p className="text-white opacity-30 text-xs">2:15 Am</p>
        </div>
      </div>
    </div>
  );
}

export default ChatinList;
