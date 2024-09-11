import { useState } from "react";

function App() {
  let [counter, setCounter] = useState(15);
  // let counter = 5;

  const addValue = () => {
    console.log("clicked", counter);
    setCounter(counter + 1);
  };
  const removeValue = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>chai aur react{counter}</h1>
      <h2>counter value : {counter} </h2>
      <button onClick={addValue}>add value{counter}</button>
      <br></br>
      <button onClick={removeValue}>remove value{counter}</button>
      <p>Footer {counter}</p>
    </>
  );
}

export default App;
