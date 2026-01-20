import { createSlice } from "@reduxjs/toolkit";

export const collectionSlice = createSlice({
  name: "collection",
  initialState,
  reducers: {
    addCollection: {},
    removeCollection: {},
    clearCollection: {},
  },
});

export const { addCollection, removeCollection, clearCollection } =
  collectionSlice.actions;
const collectionReducer = collectionSlice.reducer;
export default collectionReducer;
