import { createSlice } from "@reduxjs/toolkit";

const selectedMovieSlice = createSlice({
   name: "selectedMovie",
   initialState: {
      modalOpen: false,
      id: null,
      resForSelectedId: null,
   },
   reducers: {
      modalSet: (state, action) => {
         state.modalOpen = !state.modalOpen;
      },
      playId: (state, action) => {
         state.id = action.payload;
      },
      setSelectedMovieData: (state, action) => {
         state.resForSelectedId = action.payload;
      },
   },
});

export const { modalSet, playId, setSelectedMovieData } =
   selectedMovieSlice.actions;
export default selectedMovieSlice.reducer;
