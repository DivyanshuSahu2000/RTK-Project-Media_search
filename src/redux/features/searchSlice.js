import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    querry: "",
    activeTab: "photos",
    results: [],
    loading: false,
    error: null,
  },
  reducers: {
    setQuerry(state, actions) {
      state.querry = action.payload;
    },
    setActiveTab(state, action) {
      state.activeTab = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setResults(state, action) {
      state.results = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const { setQuerry, setActiveTab, setLoading, setResults, setError } =
  searchSlice.actions;

export default searchSlice.reducer;
