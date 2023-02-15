import { ReactComponent as Logo } from "../svgs/Logo.svg";
function SignUp() {
  return (
  <div className="w-full h-full  bg1 flex justify-center items-center">
    <form className="w-[300px] gap-3 rounded-2xl bg-white bg-opacity-5 backdrop-blur-2xl drop-shadow-2xl flex flex-col items-center  p-3 py-4">
       <Logo className="w-20 h-20"/> 
       <h1 className="text-2xl pb-2  text-white">Sign In</h1>
        <button className="bg-prime p-2 px-6 text-white rounded-lg">Sign Up with google</button>
        <p className="text-xs text-white">You dont have an account ? SignIn</p>
    </form>
  </div>
  );
}
export default SignUp;
