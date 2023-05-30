import { configureStore } from '@reduxjs/toolkit';
import { someReducer } from '../modules/module';

export const store = configureStore({
  reducer: {
    some: someReducer,
  },
});
