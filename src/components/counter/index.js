import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {CLEAR_COUNTER, DECREMENT_COUNTER, INCREMENT_COUNTER} from "../redux/counter/action";


//React-redux example
const CounterApp = () => {
  const stateCounter = useSelector(state => state.counterReducer.counter)
  const cashState = useSelector(state => state.cashReducer.cash)
  const dispatch = useDispatch()

  const handleIncrementCounter = () => {
    dispatch({
      type: INCREMENT_COUNTER
    })
  }

  const handleDecrementCounter = () => {
    dispatch({
      type: DECREMENT_COUNTER
    })
  }

  const handleClearCounter = () => {
    dispatch({
      type: CLEAR_COUNTER
    })
  }

  console.log(stateCounter, 'stateCounter')

  return (
    <div className="App">
      <button onClick={handleIncrementCounter}>+</button>
      {stateCounter}
      -------
      balance from Balance component: {cashState}
      <button onClick={handleDecrementCounter}>-</button>
      <button onClick={handleClearCounter}>Clear counter</button>
    </div>
  )
}

export default CounterApp