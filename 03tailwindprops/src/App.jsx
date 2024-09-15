import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components//card";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1 className="text-3xl bg-green-300 p-3 rounded-md">hello tail wind</h1>
      <Card userName="manu" />
      <Card username="json" post="staff engineer" />
      <Card />
    </>
  );
}

export default App;
