import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
   name: "gpt",
   initialState: {
      showGptSearch: false,
      moviesNames: null,
      moviesResults: null,
      searchBtnClicked: false,
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
      searchBtn: (state, action) => {
         state.searchBtnClicked = true;
      },
   },
});

export const { toggleGPTSearch, getMovies, searchBtn } = gptSlice.actions;
export default gptSlice.reducer;
