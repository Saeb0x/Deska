import React from 'react'
import './Login.css'
import { auth, provider } from '../../firebase-config'
import {signInWithPopup} from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

const Login = ( { setIsAuth }) => {
  let navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            // console.log(result);
            const name = result.user.displayName;
            const email = result.user.email;
            const profilePic = result.user.photoURL;

            localStorage.setItem("name", name)
            localStorage.setItem("email", email)
            localStorage.setItem("profilePic", profilePic)
            localStorage.setItem("isAuth", true);
            setIsAuth(true);
            navigate("/book"); // Navigate to the books' advanced search system
        })
        .catch((error) => {
            console.log(error);
        });
  };
  return (
    <div className='login'>
      <button className='login-with-google-btn' onClick={signInWithGoogle}>Sign in With Google</button>
    </div>
  )
}

export default Login
