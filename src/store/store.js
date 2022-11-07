import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../slices/counterslice'
import postsReducer from '../slices/postsslice'
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postsReducer,
  },
})