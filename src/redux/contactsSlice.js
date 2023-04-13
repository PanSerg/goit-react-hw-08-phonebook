import { createSlice } from "@reduxjs/toolkit";
import { addContact, fetchContacts, deleteContact } from "./operations";

const handlePending = state => {
    state.isLoading = true;
};

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: { items: [], 
    isLoading: false,
    error: null,
    },
    // reducers: {
    //     addContact(state, action) {
    //         state.items.push(action.payload);
    //     },
    //     delContact(state, action) {
    //         state.items = state.items.filter(contact => contact.id !== action.payload);
    //     }
    // }
    extraReducers: {
        [addContact.pending]: handlePending,
        [addContact.rejected]: handleRejected,
        [fetchContacts.pending]: handlePending,
        [fetchContacts.rejected]: handleRejected,
        [deleteContact.pending]: handlePending,

        [fetchContacts.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items = action.payload;
        },

        [addContact.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items.push(action.payload);
        },

        [deleteContact.fulfilled] (state, action) {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.items.splice(index, 1);
      },
    },
});

export const contactsReducer = contactsSlice.reducer;

