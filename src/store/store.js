import { configureStore } from "@reduxjs/toolkit";
import contactSlice from './Features/ContactSlice'

export const store = configureStore({
  reducer:{
    contactData:contactSlice
  }
})