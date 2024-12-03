import React from 'react';
import { signInWithPopup, auth, provider } from '../firebaseConfig';

const Login = ({ setUser }) => {
  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const { displayName, email, photoURL } = result.user;
      setUser({ name: displayName, email, photoURL });
    } catch (error) {
      console.error("Login Failed:", error);
    }
  };

  
    return (
      <div className="login-card">
      <h1>React with google Auth</h1>
        
        <button className="btn-primary" onClick={handleLogin}>
          Sign in with Google
        </button>
        <footer>&copy; {new Date().getFullYear()} Mindmate. All rights reserved.</footer>
      </div>
    );
  


  
};

export default Login;

