import OnlineFriends from "./OnlineFriends";
import { ReactComponent as SearchIcon } from "../svgs/searchnormal1.svg";

function Left() {
  return (
    <div className="w-[20%] bg-[#1C1C25] flex flex-col">
      <OnlineFriends />
      <div className="w-[80%] h-[0.8px] rounded-full bg-gray-800 mx-auto"></div>
      <div className="p-3">
        <div className="flex relative bg-[#18181C] py-2 rounded-xl">
          <input type="text" className="outline-none bg-[#18181C] px-4 text-gray-200"/>
          <button className="absolute right-2">
          <SearchIcon className="icon"/>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Left;
