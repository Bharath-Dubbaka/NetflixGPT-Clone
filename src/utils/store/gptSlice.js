import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
   name: "gpt",
   initialState: {
      showGptSearch: true,
   },
   reducers: {
      toggleGPTSearch: (state, action) => {
         state.showGptSearch = !state.showGptSearch;
      },
   },
});

export const { toggleGPTSearch } = gptSlice.actions;
export default gptSlice.reducer;
