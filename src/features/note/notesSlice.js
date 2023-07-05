import { createSlice} from '@reduxjs/toolkit';
const initialStateValue = {
    "all_notes": []
};

export const notesSlice = createSlice({
    name: 'Notes',
    initialState: initialStateValue,

    reducers: {
        addNote: (state, action) => {
            return {
                ...state,
                all_notes: [...state.all_notes, action.payload]
            }
        },

        deleteNote: (state, action) => {
            return {
                ...state,
                all_notes: state.all_notes.filter((note, index) => index !== action.payload)
            }
        },

        pinNote: (state, action) => {
            return {
                ...state,
                all_notes: state.all_notes.map((val, index) => {
                    return index === action.payload ? { ...val, "isPinned": !val.isPinned } : val
                }
                )
            }

        }
    }

})


export const { addNote, deleteNote, pinNote } = notesSlice.actions

export default notesSlice.reducer
