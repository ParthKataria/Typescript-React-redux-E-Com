import { createSlice } from "@reduxjs/toolkit";
import { UserDetails } from "../../TypeDefinations/types";
const initialState: UserDetails | null = null;
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    changeUser(state, action) {
      return action.payload;
    },
  },
});
export const { changeUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
