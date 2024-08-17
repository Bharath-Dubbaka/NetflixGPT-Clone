import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
   name: "gpt",
   initialState: {
      showGptSearch: true,
      moviesNames: null,
      moviesResults: null,
   },
   reducers: {
      toggleGPTSearch: (state, action) => {
         state.showGptSearch = !state.showGptSearch;
      },
      getMovies: (state, action) => {
         const { movieNamesFromGemini, movieResultsFromTMDB } = action.payload;
         state.moviesNames = movieNamesFromGemini;
         state.moviesResults = movieResultsFromTMDB;
      },
   },
});

export const { toggleGPTSearch, getMovies } = gptSlice.actions;
export default gptSlice.reducer;
