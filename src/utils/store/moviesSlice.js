import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
   name: "movies",
   initialState: {
      nowPlayingMovies: null,
      heroMovieTrailer: null,
   },
   reducers: {
      addNowPlayingMovies: (state, action) => {
         state.nowPlayingMovies = action.payload;
      },
      addHeroMovieTrailer: (state, action) => {
         state.heroMovieTrailer = action.payload;
      },
   },
});

export const { addNowPlayingMovies, addHeroMovieTrailer } = moviesSlice.actions;
export default moviesSlice.reducer;
