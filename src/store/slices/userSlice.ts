import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    changeUser(state, action) {
      // console.log(action.payload);
      return action.payload;
    },
  },
});
export const { changeUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
