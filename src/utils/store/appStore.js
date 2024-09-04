import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
// import moviesReducer from "./moviesSlice";
import moviesReducer from "./moviesSlice";
import gptReducer from "./gptSlice";
import selectedMovieReducer from "./selectedMovieSlice";

const appStore = configureStore({
   reducer: {
      user: userReducer,
      movies: moviesReducer,
      gpt: gptReducer,
      selectedMovie: selectedMovieReducer,
   },
});

export default appStore;
