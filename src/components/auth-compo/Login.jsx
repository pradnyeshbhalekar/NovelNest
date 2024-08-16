import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { GoogleAuthProvider } from "firebase/auth/web-extension";
import { ToastContainer, toast } from "react-toastify";
import GoogleAuthImg from "./GoogleAuthImg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      console.log(user);
      console.log("Successfully logged in");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className="border bg-gray-200 w-auto p-8 grid justify-center rounded-xl justify-items-center">
        <h1 className="font-lobster font-extrabold text-4xl ml-4">Login! </h1>
        <br></br>
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          <input
            type="email"
            id="email"
            className="border border-black rounded-2xl text-center p-2 w-[20rem] outline-none"
            placeholder="Enter your email"
            required
            onChange={handleEmail}
          />
          <br />
          <input
            type="password"
            id="password"
            className="border border-black rounded-2xl p-2 text-center w-[20rem] outline-none"
            placeholder="Enter your password"
            onChange={handlePassword}
          />
          <br />
          <button
            className="bg-zinc-900 p-2 text-white rounded-lg w-[20rem]"
            type="submit"
          >
            Login
          </button>
          <br></br>
        </form>
        <label>
          New user?&nbsp;
          <Link to="/register" className="text-dcblue">
            Register
          </Link>
        </label>
        <br />
        <GoogleAuthImg />
      </div>
    </div>
  );
};

export default Login;
