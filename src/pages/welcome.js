/*import React from "react";
import GoogleSignIn from "/";
import {auth} from "../firebase"
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
//import GoogleSignInImg from "/Users/Shared/Visual Studio Chat App/chatapp/img/btn_google_signin_dark_pressed_web.png"; // Update the path accordingly


const Welcome = () => {
    const handleGoogleSignIn = () => {
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider);
    };
  
    return (
      <main className='welcome'>
        <h2>Welcome to Chat</h2>
        <p>Sign in With Google</p>
        <button className="sign-In" onClick={handleGoogleSignIn}>
        <img src="/btn_google_signin_dark_pressed_web.png" alt="Sign In With Google" />
        </button>
      </main>
    );
  };
  
  export default Welcome;*/

  /*import React, { useState } from "react";
  import { useRouter } from 'next/router'; // Import useRouter from next/router
  import { signUpWithEmail, signInWithEmail } from "../auth";
  import { getFirestore } from 'firebase/firestore';

  
  const Welcome = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSignUp, setIsSignUp] = useState(true);
    const [error, setError] = useState('');
    const router = useRouter(); // Initialize the router
  
    const handleAuth = async () => {
      try {
        if (isSignUp) {
          await signUpWithEmail(email, password);
          alert("Sign-up successful!"); // Show an alert on successful sign-up
        } else {
          await signInWithEmail(email, password);
          router.push('/chatroom'); // Redirect to the chatroom upon successful sign-in
        }
      } catch (err) {
        setError(err.message);
      }
    };
  
    return (
      <main className='welcome'>
        <h2>Welcome to Chat</h2>
        <p>{isSignUp ? "Sign up" : "Sign in"} with Email and Password</p>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="auth-button" onClick={handleAuth}>
          {isSignUp ? "Sign Up" : "Sign In"}
        </button>
        <button className="toggle-auth" onClick={() => setIsSignUp(!isSignUp)}>
          {isSignUp ? "Switch to Sign In" : "Switch to Sign Up"}
        </button>
        {error && <p className="error">{error}</p>}
      </main>
    );
  };
  
  export default Welcome; */

  import React, { useState } from 'react';
import { signInWithEmail, signUpWithEmail } from '../auth';
import { useRouter } from 'next/router';
import Image from 'next/image';
//import chatImage from '../';       

const Welcome = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(true);
  const [message, setMessage] = useState('');
  const router = useRouter();

  const handleAuth = async () => {
    try {
      if (isSignUp) {
        await signUpWithEmail(email, password);
        setMessage('Thank you for signing up! Please log in.');
      } else {
        await signInWithEmail(email, password);
        router.push('/chatroom');
      }
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <div style={{ backgroundColor: '#00246B', minHeight: '100vh' }}>
      <main className='welcome'>
        <img src="/chat_724713.png" alt="" id="welcome-image" className="welcome-image" />

        <h2>Log In or Sign Up</h2>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <div className="button-container">
          <button className="auth-button" onClick={handleAuth}>
            {isSignUp ? 'Sign Up' : 'Sign In'}
          </button>
          <button className="switch-button" onClick={() => setIsSignUp(!isSignUp)}>
            Switch to {isSignUp ? 'Sign In' : 'Sign Up'}
          </button>
        </div>
        {message && <p>{message}</p>}
      </main>
    </div>
  );
};


export default Welcome;