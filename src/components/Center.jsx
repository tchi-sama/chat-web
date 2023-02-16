import { Avatar, IconButton } from "@mui/material";
import React, { useEffect } from "react";
import { ReactComponent as MoreIcon } from "../svgs/more.svg";
import { ReactComponent as SearchIcon } from "../svgs/searchnormal1.svg";
import Msg from "./Msg";
import { ChatContext } from "../context/ChatContext";
import MsgsViewer from "./MsgsViewer";
import Input from "./Input" 
function Center({ infoToggle }) {
  const { data } = React.useContext(ChatContext);
   
  return (
    <div className="flex-1 bg-[#131519] h-full relative center">
      <div className="z-50 absolute w-full left-0 top-0 p-1 bg-[#ffffff03] backdrop-blur-2xl drop-shadow-lg ">
        <div className="flex items-center gap-2">
          <div className="flex w-full items-center">
            <div className="flex items-center gap-3 flex-1 ">
              <div className="px-4 hover:px-5 flex items-center gap-3 cursor-pointer duration-200 hover:bg-[#9994] p-2 rounded-lg ">
                <Avatar src={data.user?.photoURL} sx={{ width: 50, height: 50 }}/>
                <div>
                  <h1 className="text-2xl font-semibold text-white">{data.user?.displayName}</h1>
                  <h3 className="text-xs text-white">active 10h ago</h3>
                </div>
              </div>
            </div>
            <IconButton className="icon2" >
              <SearchIcon className="icon2" />
            </IconButton>
            <IconButton className="icon2" onClick={infoToggle}>
              <MoreIcon />
            </IconButton>
          </div>
        </div>
      </div>
      <MsgsViewer/>
      <Input/>
    </div>
  );
}

export default Center;
