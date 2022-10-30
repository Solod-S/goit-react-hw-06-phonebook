import { configureStore } from '@reduxjs/toolkit';
import { myContactSlice } from './contactSlice';
import { myFilterSlice } from './filterSlice';
export const store = configureStore({
  reducer: {
    contacts: myContactSlice.reducer,
    filter: myFilterSlice.reducer,
  },
});
