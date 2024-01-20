import React, { useState } from "react";
import "./App.css";
import Profile from "./components/Profile";
import SignIn from "./components/Signin";

function App() {
  const [userDetails, setUserDetails] = useState({});

  return (
    <div className="App">
      {localStorage.getItem('user Data') ? (
        <Profile userDetails={userDetails} setUserDetails={setUserDetails} />
      ) : (
        <SignIn setUserDetails={setUserDetails} />
      )}
    </div>
  );
}

export default App;