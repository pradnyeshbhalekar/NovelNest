import { auth } from "../firebase/firebase";
import React from "react";
import GoogleAuthImg from "../../assets/img/googleauth.png";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const GoogleAuth = () => {
  function AuthGoogle() {
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider).then(async (result) => {
      console.log(result);
    });
  }
  return (
    <div>
      <img
        src={GoogleAuthImg}
        className="cursor-pointer"
        onClick={AuthGoogle}
        alt=""
      />
    </div>
  );
};
export default GoogleAuth;
