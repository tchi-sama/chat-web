import { Avatar, IconButton } from "@mui/material";
import React from "react";
import { ReactComponent as MoreIcon } from "../svgs/more.svg";
import { ReactComponent as SearchIcon } from "../svgs/searchnormal1.svg";

function Center({ infoToggle }) {
  return (
    <div className="flex-1 bg-[#131519] h-full relative">
      <div className="absolute w-full left-0 top-0 p-1 bg-white bg-opacity-5 backdrop-blur-2xl drop-shadow-lg ">
        <div className="flex items-center gap-2">
          <div className="flex w-full items-center">
            <div className="flex items-center gap-3 flex-1 ">
              <div className="px-4 hover:px-5 flex items-center gap-3 cursor-pointer duration-200 hover:bg-[#3339] p-2 rounded-lg ">
                <Avatar src="https://picsum.photos/201/200" />
                <div>
                  <h1 className="text-2xl font-semibold text-white">vitoria</h1>
                  <h3 className="text-xs text-white">active 10h ago</h3>
                </div>
              </div>
            </div>
            <IconButton>
              <SearchIcon className="icon2" />
            </IconButton>
            <IconButton onClick={infoToggle}>
              <MoreIcon className="icon2" />
            </IconButton>
          </div>
        </div>
      </div>

      <main className="p-5 h-full overflow-y-auto">
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <div className="flex gap-4 justify-start items-start hover:px-2 duration-200">
          <IconButton>
            <Avatar />
          </IconButton>
          <div className="flex flex-col gap-1">
            <div className="flex w-full justify-between items-end">
              <h1 className="font-semibold text-white">vitoria</h1>
              <span className="text-xs text-gray-400">05:48</span>
            </div>
            <p className="w-fit text-sm text-white p-3 bg-[#20222b] rounded-xl">
              hello how are you today
            </p>
            <p className="w-fit text-sm text-white p-3 bg-[#20222b] rounded-xl">
              hope you are good
            </p>
          </div>
          <div>
            
          </div>
        </div>

      </main>

      <div className="rounded-xl absolute bottom-2 p-3 px-5 w-[calc(100%-60px)] left-[50%] translate-x-[-50%] bg-white bg-opacity-5 backdrop-blur-2xl drop-shadow-lg">
        <input
          type="text"
          className="w-full h-full bg-transparent outline-none text-white"
        />
      </div>
    </div>
  );
}

export default Center;
