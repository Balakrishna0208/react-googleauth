import React, { useState } from "react";
import Login from "./components/Login";
import Welcome from "./components/Welcome";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      {user ? <Welcome user={user} setUser={setUser} /> : <Login setUser={setUser} />}
    </div>
  );
}

export default App;
