import { configureStore } from '@reduxjs/toolkit'
import addReducer from './todoSlice'
export const store = configureStore({
  reducer: {
    item: addReducer,
  },
})

export type Rootstate = ReturnType <typeof store.getState>
export type Appdispatch =  typeof store.dispatch