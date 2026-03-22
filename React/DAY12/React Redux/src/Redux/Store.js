import { configureStore } from '@reduxjs/toolkit'
import CounterReducer from "../Feactures/Counter/CounterSlice"
export const store = configureStore({
  reducer: {
    counter:CounterReducer
  },
})