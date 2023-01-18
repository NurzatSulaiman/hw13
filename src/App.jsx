import React, {useState} from "react";
import './App.css';
import {useSelector} from "react-redux";
import CounterApp from "./components/counter";
import Balance from "./components/balance";

function App() {
  const [counter, setCounter] = useState(0);

  const handleIncrementCounter = () => {
    setCounter(prev => prev + 1)
  }

  const handleDecrementCounter = () => {
    setCounter(prev => prev - 1)
  }

  return (
    <div className="App">
      <p>with UseState</p>
      <button onClick={handleIncrementCounter}>+</button>
      {counter}
      <button onClick={handleDecrementCounter}>-</button>

      <p>with React-Redux</p>
      <CounterApp/>
      <Balance/>
    </div>
  );
}

export default App;
