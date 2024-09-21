import React, { useState } from "react";
import Login from "./components/Login";
import Profile from "./components/profile";
import UserContextProvider from "./context/userContextProvider";

import "./App.css";

function App() {
  return (
    <UserContextProvider>
      <h1>React video for context api</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
