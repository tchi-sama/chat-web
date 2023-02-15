import { Avatar, IconButton } from "@mui/material";
import React from "react";
import { ReactComponent as MoreIcon } from "../svgs/more.svg";
import { ReactComponent as SearchIcon } from "../svgs/searchnormal1.svg";
import { ReactComponent as SendIcon } from "../svgs/send.svg";
import { ReactComponent as LinkIcon } from "../svgs/link.svg";
import Msg from "./Msg";

function Center({ infoToggle }) {
  return (
    <div className="flex-1 bg-[#131519] h-full relative center">
      <div className="z-50 absolute w-full left-0 top-0 p-1 bg-[#ffffff03] backdrop-blur-2xl drop-shadow-lg ">
        <div className="flex items-center gap-2">
          <div className="flex w-full items-center">
            <div className="flex items-center gap-3 flex-1 ">
              <div className="px-4 hover:px-5 flex items-center gap-3 cursor-pointer duration-200 hover:bg-[#9994] p-2 rounded-lg ">
                <Avatar src="https://picsum.photos/201/200" sx={{ width: 50, height: 50 }}/>
                <div>
                  <h1 className="text-2xl font-semibold text-white">vitoria</h1>
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

      <main className="pt-24 p-5 h-full overflow-y-auto msgsviewr">
    <Msg />
      

      </main>

      <form className="flex items-center border-[#fff1] border z-50 rounded-xl absolute bottom-2 p-1  w-[calc(100%-60px)] left-[50%] translate-x-[-50%] bg-[#ffffff03] backdrop-blur-2xl ">
        <IconButton className="icon3" >
        <LinkIcon />
        </IconButton>
        <input
          type="text"
          className="w-full h-full bg-transparent outline-none text-white "
        />
        <button> 
        <IconButton className="icon2" >
        <SendIcon />
        </IconButton>
        </button>
      </form>
    </div>
  );
}

export default Center;
