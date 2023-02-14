import { Avatar, IconButton } from "@mui/material";
import React from "react";
import { ReactComponent as MsgIcon } from "../svgs/message.svg";
import { ReactComponent as HomeIcon } from "../svgs/home.svg";
import { ReactComponent as NotIcon } from "../svgs/notificationbing.svg";
import { ReactComponent as SetIcon } from "../svgs/setting.svg";

function Navbar() {
  return (
    <div className="w-20 bg-[#18181C]  flex items-center flex-col gap-3">
      <h1 className="text-xl text-[#399ad3] py-5 px-2 font-bold ">Logo</h1>
      <IconButton >
        <Avatar className="border-gray-400 border-2" src="https://scontent.frak1-2.fna.fbcdn.net/v/t39.30808-6/272903096_1179661402805532_104898404720613763_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=wzSep73DAo8AX_1eHoV&tn=dNeaDorti2RHBv7M&_nc_ht=scontent.frak1-2.fna&oh=00_AfAZVi0D_tICZwUr8Kl_tKSVdNAwZ3YtJ9UMIABB0TWekQ&oe=63F11D25" />
      </IconButton>
      <div className="flex flex-col items-center w-full py-5 gap-2">

        
        <div className="flex w-full">
          <button className="w-full flex items-center justify-center flex-1">
            <HomeIcon className="icon iconActive m-2" />
          </button>
          <div className="h-full rounded-full w-1 bg-[#399AD3]">
          </div>
        </div>

        <div className="flex w-full">
          <button className="w-full flex items-center justify-center flex-1">
          <MsgIcon className="icon m-2" />
          </button>
          <div className="h-full rounded-full w-1 bg-transparent">
          </div>
        </div>

        <div className="flex w-full">
          <button className="w-full flex items-center justify-center flex-1">
          <NotIcon className="icon m-2" />
          </button>
          <div className="h-full rounded-full w-1 bg-transparent">
          </div>
        </div>


      </div>
      <div className="bg-[#494C50] h-1 w-[50%] mx-auto rounded-full">

      <div className="flex flex-col items-center w-full py-5 gap-2">

        <div className="flex w-full">
          <button className="w-full flex items-center justify-center flex-1">
          <SetIcon className="icon m-2" />
          </button>
          <div className="h-full rounded-full w-1 bg-transparent">
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Navbar;
