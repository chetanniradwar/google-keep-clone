import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialStateValue = {
  note : {  title: "",
            content: "",
            isPinned: false}
};

export const createNoteSlice = createSlice({
    name: 'CreateNote',
    initialState: initialStateValue,

    reducers:{
        updateNote : (state, action) => {
            // console.log(action.payload)
            const {name , value} = action.payload
            return {
                ...state.note,
                [name] : value
            }
        },

        initializeNote : (state, action) => {
            return initialStateValue
            
        }

    
    }
})

export const {updateNote, initializeNote} = createNoteSlice.actions

export default createNoteSlice.reducer

