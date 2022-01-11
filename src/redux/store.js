import { configureStore } from '@reduxjs/toolkit'
import MoviesReducer from './reducer/moviesSlice'

export default configureStore({
  reducer: {
    Movies:MoviesReducer,
  },
})