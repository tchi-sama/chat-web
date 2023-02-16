import OnlineFriends from "./OnlineFriends";
import ChatList from "./ChatList";

import { ReactComponent as EditIcon } from "../svgs/edit.svg";
import { Avatar, IconButton } from "@mui/material";
import SearchChatUser from "./SearchChatUser";

function Left() {
  return (
    <div className="p-2 max-w-[400px]  hidden w-[20%] min-w-[250px] bg-[#1C1C25] md:flex flex-col">
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
      <SearchChatUser/>

      <h4 className="p-3 text-white opacity-60">All messages</h4>
      <ChatList />
    </div>
  );
}

export default Left;
