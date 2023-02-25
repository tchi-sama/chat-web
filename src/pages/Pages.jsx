import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import { AuthContext } from "../context/AuthContext";
import Home from "./Home";
import MessagesPage from "./MessagesPage";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

function Pages() {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="h-[100vh]">
      <Routes>
        <Route path="/" element={currentUser ? <MessagesPage /> : <SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default Pages;
