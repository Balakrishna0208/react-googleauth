/*import React from 'react';
import { signOut, auth } from '../firebaseConfig';

const Welcome = ({ user, setUser }) => {
  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Logout Failed:", error);
    }
  };

  return (
    <div className="welcome">
      <h1>Welcome, {user.name}</h1>
      <p>Email: {user.email}</p>
      <img src={user.photoURL} alt="User Profile" />
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Welcome;
*/

import React from 'react';

const Welcome = ({ user, setUser }) => {
  const handleLogout = () => {
    setUser(null);
    console.log("User logged out");
  };

  return (
    <div className="login-card">
      <h1>Welcome, {user.name}</h1>
      <p>Logged in as: {user.email}</p>
      <img
        src={user.photoURL}
        alt="User Profile"
        style={{
          borderRadius: '50%',
          width: '90px',
          margin: '20px 0',
        }}
      />
      <button className="btn-primary" onClick={handleLogout}>
        Logout
      </button>
      <footer>&copy; {new Date().getFullYear()} Mindmate. All rights reserved.</footer>
    </div>
  );
};

export default Welcome;
