import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const contactSlice = createSlice({
    name: 'contacts',
    initialState: [],
    reducers: {
        addNewContact: {
        reducer(state, action) {
                state.push(action.payload)
        },
        prepare({ name, number }) {
            return {
                payload: {
                    id: nanoid(),
                    name,
                    number
                }}}
        },
        deleteContact(state, action) {
           return state.filter(contact => 
        contact.id !== action.payload)
        }
    }
})

export const { addNewContact, deleteContact } = contactSlice.actions;
export const contactReducer = contactSlice.reducer;