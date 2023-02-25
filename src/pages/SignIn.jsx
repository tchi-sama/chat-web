import { useNavigate, Link } from "react-router-dom";
import { ReactComponent as Logo } from "../svgs/Logo.svg";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useState } from "react";

function SignIn() {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();
  const handelSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
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
        <h1 className="text-2xl pb-2  text-white">Sign In</h1>
        <input
          placeholder="email"
          type="email"
          className="p-2 outline-none  w-full bg-[#181A1E] rounded-xl text-white"
        ></input>
        <input
          placeholder="password"
          type="password"
          className="p-2 outline-none  w-full bg-[#181A1E] rounded-xl text-white"
        ></input>
        <button className="bg-prime p-2 px-6 text-white rounded-lg">
          Sign in
        </button>
        <p className="text-xs text-white">
          You dont have an account ? <Link to="/signup">SignUp</Link>
        </p>
        {err && <p className="text-xs text-red-500">Wrong email or password</p>}
      </form>
    </div>
  );
}
export default SignIn;
