import { createSlice } from "@reduxjs/toolkit";

export const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    value: 0,
    data: [],
    movies:[],
    banner:{},
    selectMovie:null,
  },
  reducers: {
    fetchMovies: (state,action) => {
      state.movies = action.payload;
    },
    setBanner: (state,action) => {
      state.banner = action.payload;
    },
    selectMovie: (state,action) => {
      state.selectMovie = action.payload;
    },
  },
});

export const { fetchMovies, setBanner, selectMovie } =
moviesSlice.actions;
export default moviesSlice.reducer;
