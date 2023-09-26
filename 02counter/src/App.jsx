import "./App.css";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  const addValue = () => {
    if (counter < 20) setCounter(counter + 1);
  };

  const removeValue = function () {
    if (counter > 0) setCounter(counter - 1);
  };

  return (
    <>
      <h1>Chai aur code</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>Delete value</button>
    </>
  );
}

export default App;
