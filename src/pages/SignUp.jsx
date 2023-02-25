import { ReactComponent as Logo } from "../svgs/Logo.svg";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { Link, Navigate, useNavigate } from "react-router-dom";

function SignUp() {
  const [err, setErr] = useState(false);
  const Navigate = useNavigate();

  const handelSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      //Create user
      const res = await createUserWithEmailAndPassword(auth, email, password);

      //Create a unique image name
      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //Update profile
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            //create user on firestore
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            //create empty user chats on firestore
            await setDoc(doc(db, "userChats", res.user.uid), {});
            Navigate("/");
          } catch (err) {
            console.log(err);
            setErr(true);
          }
        });
      });
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <div className="w-full h-full  bg1 flex justify-center items-center">
      <form
        onSubmit={handelSubmit}
        className="w-[400px] gap-3 rounded-2xl bg-white bg-opacity-5 backdrop-blur-2xl drop-shadow-2xl flex flex-col items-center  p-3 py-4"
      >
        <Logo className="w-20 h-20" />
        <h1 className="text-2xl pb-2  text-white">Sign Up</h1>
        <input
          type="text"
          placeholder="display name"
          className="p-2 outline-none  w-full bg-[#181A1E] rounded-xl text-white"
        ></input>
        <input
          type="email"
          placeholder="email"
          className="p-2 outline-none  w-full bg-[#181A1E] rounded-xl text-white"
        ></input>
        <input
          type="password"
          placeholder="password"
          className="p-2 outline-none  w-full bg-[#181A1E] rounded-xl text-white"
        ></input>
        <input
          type="file"
          placeholder="password"
          className="p-2 outline-none  w-full bg-[#181A1E] rounded-xl text-white"
        ></input>
        <button className="bg-prime p-2 px-6 text-white rounded-lg">
          Sign Up
        </button>
        {err ? (
          <p className="text-red-500 text-center">Invalid Credentials</p>
        ) : null}
        <p className="text-xs text-white">
          You have an account aleardy ?<Link to="/signin">SignIn</Link>
        </p>
      </form>
    </div>
  );
}
export default SignUp;
