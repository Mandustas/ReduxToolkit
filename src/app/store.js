import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import ballsReducer from '../features/balls/ballsSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    balls: ballsReducer,
  },
});
