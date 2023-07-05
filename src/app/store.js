import { configureStore } from '@reduxjs/toolkit';
import createNoteReducer from '../features/createnote/createNotesSlice';
import NotesReducer from '../features/note/notesSlice';

export const store = configureStore({
reducer: {
  createNote: createNoteReducer,
  Notes: NotesReducer
}

});
