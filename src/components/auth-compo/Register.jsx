import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuthImg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      console.log("Password doesn't match ");
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      console.log(user);
      console.log("User register successfully");
      console.log(password);
      window.location.href = "/";
    } catch (error) {
      console.log("Error: ", error.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="border bg-gray-300 w-auto p-8 grid justify-center rounded-xl justify-items-center">
        <h1 className="font-lobster font-extrabold text-4xl ml-4">
          Register!{" "}
        </h1>
        <br></br>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            className="border border-black rounded-2xl text-center p-2 w-[20rem] outline-none"
            id="email"
            placeholder="Enter email "
            onChange={handleEmail}
          />
          <br></br>
          <br></br>

          <input
            type="password"
            name="password"
            className="border border-black rounded-2xl text-center p-2 w-[20rem] outline-none"
            id="password"
            onChange={handlePassword}
            placeholder="Enter a password"
          />
          <br></br>
          <br></br>

          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            className="border border-black rounded-2xl text-center p-2 w-[20rem] outline-none"
            placeholder="Enter password again"
            onChange={handleConfirmPassword}
          />
          <br></br>
          <br></br>
          <button
            type="submit"
            className="bg-zinc-900 p-2 text-white rounded-lg w-[20rem]"
          >
            Register{" "}
          </button>
        </form>
        <br></br>

        <label>
          Already have an account?{" "}
          <Link to="/login" className="text-dcblue">
            Login
          </Link>
        </label>
        <ToastContainer />

        <br></br>

        <GoogleAuth />
      </div>
    </div>
  );
};

export default Register;
