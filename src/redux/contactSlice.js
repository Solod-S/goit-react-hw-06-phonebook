import { createSlice } from '@reduxjs/toolkit';
import contactdata from '../components/contact-data.json';
import shortid from 'shortid';
export const myContactSlice = createSlice({
  name: 'contacts',
  initialState: contactdata,
  reducers: {
    addContact(state, action) {
      console.log(`slice`, state);
      state.push({
        id: shortid.generate(),
        name: action.payload.name,
        number: action.payload.number,
      });
    },
    removeContact(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addContact, removeContact } = myContactSlice.actions;
