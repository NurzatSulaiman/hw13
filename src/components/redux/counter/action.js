export const INCREMENT_COUNTER = "INCREMENT_COUNTER"
export const DECREMENT_COUNTER = "DECREMENT_COUNTER"
export const CLEAR_COUNTER = '"CLEAR_COUNTER'

//action creator

export const addCashAction = (payload) => ({
  type: INCREMENT_COUNTER,
  payload: payload
})

export const getCashAction = (payload) => ({
  type: DECREMENT_COUNTER,
  payload: payload
})

export const clearCashAction = (payload) => ({
  type: CLEAR_COUNTER,
  payload: payload
})