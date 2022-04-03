import React, { Component } from 'react'
import './Sinup.css'
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA0LeUN82utX9Ex2JsqxL3PYNsDmWxn-4o",
    authDomain: "auth-development-bf151.firebaseapp.com",
    databaseURL: "https://auth-development-bf151-default-rtdb.firebaseio.com",
    projectId: "auth-development-bf151",
    storageBucket: "auth-development-bf151.appspot.com",
    messagingSenderId: "359153422794",
    appId: "1:359153422794:web:a4c08cb78477afe050bf33"
  };
  const app = initializeApp(firebaseConfig);
  
  




  const provider = new GoogleAuthProvider();
const DisplayUser = () =>{
    const auth = getAuth();
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    alert(user.displayName)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    alert(errorMessage)
    // ...
  });
console.log("clicked")
}





export const Googleauth=()=> {
 
    return (
      <div style={{display:"flex",columnGap:"20px"}}>
          <div>
          <button onClick={DisplayUser} type="button" class="login-with-google-btn" >
   Google Sign-In
</button>
          </div>
          <div>
          <button type="button" class="login-with-facebook-btn" >
 Facebook Sign-In
</button>
          </div>
        
      </div>
    )
  
}
