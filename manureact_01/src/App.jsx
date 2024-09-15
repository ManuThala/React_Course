import { useState } from "react";

function App() {
  // let counter = 15;

  const [counter, setCounter] = useState(15);

  function IncreaseCount() {
    setCounter(counter + 1);
  }

  function decreaseCount() {
    setCounter(counter - 1);
  }

  return (
    <>
      <h1>counter count {counter}</h1>
      <button onClick={IncreaseCount}>Increase{counter}</button>{" "}
      <button onClick={decreaseCount}>decrease{counter}</button>
      <p>footer{counter}</p>
    </>
  );
}

export default App;
