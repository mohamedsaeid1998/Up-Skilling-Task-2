import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// @ts-ignore
export const ContactSendData = createAsyncThunk("ContactSlice/ContactSendData", async ({ name, email, phone }) => {
  let res = await axios.post(`http://upskilling-egypt.com:3000/contact`, {
    name,
    email,
    phone
  })
  return res
})

let initialState = {
  data: [],
  loading: false,
  error: null
}

// @ts-ignore
export const ContactSlice = createSlice({
  name: "ContactSlice",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(ContactSendData.pending, (state) => {
      state.loading = true
    })
    builder.addCase(ContactSendData.fulfilled, (state, action) => {
      state.loading = false
      // @ts-ignore
      state.StudentsData = action.payload
    })
    builder.addCase(ContactSendData.rejected, (state) => {
      state.loading = false

    })

  }
})

export default ContactSlice.reducer