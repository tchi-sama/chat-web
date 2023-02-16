import { Avatar } from "@mui/material";
import { ReactComponent as SearchIcon } from "../svgs/searchnormal1.svg";
import { collection, doc, getDocs, query, setDoc, where } from "firebase/firestore";
import { db } from "../firebase";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

function SearchChatUser() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);
  const { currentUser } = useContext(AuthContext);

  const handleSearch = async (e) => {
    setUser(null);
    const q = query(
      collection(db, "users"),
      where("displayName", "==", username)
    );
    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
    } catch (err) {
      setErr(true);
    }
  };
  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
  };

  const handleSelect = async () => {
    const combinedId =
      currentUser.uid > user.uid
        ? currentUser.uid + user.uid
        : user.uid + currentUser.uid;
    try {
      const res = await getDocs(db, "chats", combinedId);
      if(!res.exists()){
        await setDoc(doc,(db,"chats",combinedId),{messages:[]});
      }
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <div className="p-3">
      <div className="flex relative bg-[#18181C] py-2 rounded-xl">
        <input
          type="text"
          className="outline-none bg-[#18181C] w-full px-4 text-gray-200"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          onKeyDown={handleKey}
        />
        <button className="absolute right-2">
          <SearchIcon className="icon" />
        </button>
      </div>
      {err && <p className="text-red-500 text-center">User not found</p>}
      {user && (
        <>
          <h4 className="py-3 text-white opacity-60">Results</h4>
          <div className="flex gap-3 hover:ml-2 p-3 rounded-md hover:bg-[#0001] duration-200">
            <Avatar src={user.photoURL} />
            <p className="text-white text-lg flex-1">
              <span className="">{user.displayName}</span>
            </p>
            <button
              onClick={handleSelect}
              className="px-2 bg-prime rounded-lg text-xs text-"
            >
              Open Chat
            </button>
          </div>
        </>
      )}
    </div>
  );
}
export default SearchChatUser;
