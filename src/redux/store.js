// import { configureStore } from '@reduxjs/toolkit';
import { createAction, createReducer, createSlice } from '@reduxjs/toolkit';
// import { userSlice } from './userSlice';

// {
//   contacts: [],
//   filter: ""
// }
const myContactSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact(state, action) {
      return state.push(action.payload);
    },
    removeContact(state, action) {
      return state.filter(item => item.id !== action.payload.id);
    },
  },
});

export const { addMySlice, removeMySlice } = myContactSlice.actions;
