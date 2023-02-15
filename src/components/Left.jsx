import OnlineFriends from "./OnlineFriends";
import { ReactComponent as SearchIcon } from "../svgs/searchnormal1.svg";
import ChatList from "./ChatList";

import { ReactComponent as EditIcon } from "../svgs/edit.svg";
import { IconButton } from "@mui/material";

function Left() {
  return (
    <div className="p-2 hidden w-[20%] min-w-[250px] bg-[#1C1C25] md:flex flex-col">
      <OnlineFriends />
      <div className="w-[80%] h-[0.8px] rounded-full bg-gray-800 mx-auto"></div>
      
      <div className="flex gap-1 items-center p-3">
        <div className="flex-1 flex items-center gap-3">

        <h1 className="text-white text-xl">Messages</h1>
        <h2 className="text-prime text-sm">
          42
          <span> new</span>
        </h2>
        </div>

        <IconButton>
          <EditIcon className="icon2" />
        </IconButton>
      </div>
      <div className="p-3">
        <div className="flex relative bg-[#18181C] py-2 rounded-xl">
          <input
            type="text"
            className="outline-none bg-[#18181C] w-full px-4 text-gray-200"
          />
          <button className="absolute right-2">
            <SearchIcon className="icon" />
          </button>
        </div>
      </div>
      <h4 className="p-3 text-white opacity-60">All messages</h4>
      <ChatList />
    </div>
  );
}

export default Left;
