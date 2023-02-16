import { Avatar, Badge, IconButton } from "@mui/material";
import React, { useContext } from "react";
import { ReactComponent as MsgIcon } from "../svgs/message.svg";
import { ReactComponent as HomeIcon } from "../svgs/home.svg";
import { ReactComponent as NotIcon } from "../svgs/notificationbing.svg";
import { ReactComponent as SetIcon } from "../svgs/setting.svg";
import { ReactComponent as Logo } from "../svgs/Logo.svg";
import { ReactComponent as Logout } from "../svgs/logoutcurve.svg";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { AuthContext } from "../context/AuthContext";

function Navbar({ where }) {
  const {currentUser} = useContext(AuthContext);
  return (
    <div className="w-20 py-3 bg-[#18181C] h-full flex items-center flex-col gap-3">
      <Logo className="w-14 h-14 p-2" />
      <IconButton>
        <Badge
          variant="dot"
          overlap="circular"
          color="primary"
          badgeContent=" "
        >
          <Avatar src={currentUser.photoURL} />
        </Badge>
      </IconButton>
      <div className="flex flex-col items-center w-full py-5 gap-2">
        <div className="flex w-full h-10 items-center">
          <button className="w-full flex items-center justify-center flex-1">
            <HomeIcon
              className={where == "home" ? "icon iconActive " : "icon"}
            />
          </button>
          <div
            className={`h-full rounded-full w-1 ${
              where == "home" ? "bg-[#399AD3]" : "bg-transparent"
            }`}
          ></div>
        </div>

        <div className="flex w-full h-10 items-center">
          <button className="w-full flex items-center justify-center flex-1">
            <MsgIcon
              className={where == "messages" ? "icon iconActive " : "icon"}
            />
          </button>
          <div
            className={`h-full rounded-full w-1 ${
              where == "messages" ? "bg-[#399AD3]" : "bg-transparent"
            }`}
          ></div>
        </div>

        <div className="flex w-full h-10 items-center">
          <button className="w-full flex items-center justify-center flex-1">
            <NotIcon className={where == "not" ? "icon iconActive " : "icon"} />
          </button>
          <div
            className={`h-full rounded-full w-1 ${
              where == "not" ? "bg-[#399AD3]" : "bg-transparent"
            }`}
          ></div>
        </div>
      </div>
      <div className="bg-[#494C50] h-[.5px] opacity-25 w-[50%] mx-auto rounded-full"></div>
      <div className="flex flex-col items-center w-full py-5 gap-2">
        <div className="flex w-full h-10 items-center">
          <button className="w-full flex items-center justify-center flex-1">
            <SetIcon
              className={where == "setting" ? "icon iconActive " : "icon"}
            />
          </button>
          <div
            className={`h-full rounded-full w-1 ${
              where == "setting" ? "bg-[#399AD3]" : "bg-transparent"
            }`}
          ></div>
        </div>
      </div>
      <div className="flex-1 flex justify-end flex-col items-center">
        <IconButton onClick={()=>signOut(auth)} className="icon2">
            <Logout/>
        </IconButton>
      </div>
    </div>
  );
}

export default Navbar;
