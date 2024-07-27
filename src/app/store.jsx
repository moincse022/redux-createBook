import { configureStore } from '@reduxjs/toolkit'

import bookReducer from '../features/bookSlice'
export default configureStore({
  reducer: {
    booksR:bookReducer,
  }
})