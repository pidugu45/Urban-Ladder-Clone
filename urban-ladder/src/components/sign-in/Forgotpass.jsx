import React from 'react'
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { initializeApp } from "firebase/app";
import {useNavigate} from "react-router-dom"

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


function Forgotpass() {
  const navigate = useNavigate()
    const auth = getAuth();
    let textInput = React.createRef()
    const Handleuserpass=(e)=>{
        const  email = textInput.current.value;
        console.log(email)
        sendPasswordResetEmail(auth, email)
  .then(() => {
    alert("Password reset email sent!") 
    navigate("/signin")
    // ..
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    // ..
  });
        }
  return (
   
    <div>
        <h2>
Enter Your Email Address !
        </h2>
        <input  type="text" ref={textInput} />
        <button onClick={Handleuserpass}>Reset Password</button>
    </div>
  )
 
}

export default Forgotpass