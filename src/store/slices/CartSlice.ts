import { createSlice } from "@reduxjs/toolkit";
import { Item } from "../../TypeDefinations/types";
const initialState: Item[] = [];
const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      // Complete item
      const arg = action.payload;
      const temp = state
        .filter((item) => {
          return item.articles[0].code !== arg.articles[0].code;
        })
        .map((item) => {
          return { ...item, quantity: 1 };
        });
      temp.push({ ...arg, quantity: 1 });
      return temp;
    },
    modifyElement(state, action) {
      // Item code,quantity
      const { code, quantity } = action.payload;
      const temp = state.map((item) => {
        if (item.articles[0].code === code) {
          if (quantity > 0) return { ...item, quantity };
        }
        return item;
      });
      return temp;
    },
    removeElement(state, action) {
      // Code
      return state.filter((item) => item.articles[0].code !== action.payload);
    },
  },
});
export const { addToCart, modifyElement, removeElement } = CartSlice.actions;
export const cartReducer = CartSlice.reducer;
