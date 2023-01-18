import React from "react";
import {useDispatch, useSelector} from "react-redux";
import { ADD_CASH, GET_CASH, cashReducer} from "../redux/cash/reducer";
import {addCashAction, clearCashAction, getCashAction} from "../redux/cash/action";

const Balance = () => {
  const cashState = useSelector(state => state.cashReducer.cash)
  const dispatch = useDispatch()

  const getCash = (amount) => {
    dispatch(getCashAction(amount))
  }
  const addCash = (amount) => {
    dispatch(addCashAction(amount))
  }

  const clearCash = () => {
    dispatch(clearCashAction())
  }
  return (
    <div>
      balance: {cashState}
      <button onClick={() => addCash(Number(prompt()))}>Add</button>
      <button onClick={() => getCash(Number(prompt()))}>Get</button>
      <button onClick={() => clearCash()}>Clear</button>
    </div>
  )
}

export default Balance