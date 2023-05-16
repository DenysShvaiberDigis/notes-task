import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { RootState } from '../redux';
import { INITIAL_NOTES } from '../../helpers/constants';

export const initialState: TNotesState = {
  notes: INITIAL_NOTES,
  searchQuery: '',
  sortBy: 'title',
};

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<TNote>) => {
      state.notes.push(action.payload);
    },
    removeNote: (state, action: PayloadAction<string>) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload);
    },
    updateNote: (state, action: PayloadAction<TNote>) => {
      state.notes = state.notes.map((note) =>
        note.id === action.payload.id ? action.payload : note
      );
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    setSortBy: (state, action: PayloadAction<TSortOptions>) => {
      state.sortBy = action.payload;
    },
  },
});

export const { addNote, removeNote, updateNote, setSearchQuery, setSortBy } = notesSlice.actions;

export const selectNotes = (state: RootState) => state.notes.notes;
export const selectSearchQuery = (state: RootState) => state.notes.searchQuery;
export const selectSortBy = (state: RootState) => state.notes.sortBy;

export default notesSlice.reducer;
