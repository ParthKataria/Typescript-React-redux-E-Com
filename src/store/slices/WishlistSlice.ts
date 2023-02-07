import { createSlice } from "@reduxjs/toolkit";
const WishlistSlice = createSlice({
  name: "wishlist",
  initialState: [],
  reducers: {
    addToWishlist(state, action) {
      // state.push(action.payload);
    },
    removeFromWishlist(state, action) {
      // const temp=state.filter()
    },
  },
});
export const { addToWishlist } = WishlistSlice.actions;
export const wishlistReducer = WishlistSlice.reducer;
