import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const initialState = {
    characters:null
}
export const asyncData = createAsyncThunk(
    'getCharacters',
    async (_, {dispatch}) => {
        const response = await fetch('https://api.disneyapi.dev/character')
        const data = await response.json();
        dispatch(addCharacter(data.data))
    }
)
const getSliceData = createSlice({
    name: 'characters',
    initialState,
    reducers:{
        addCharacter: (state, action) => {
            state.characters = action.payload;
        }
    }
})
export const {addCharacter} = getSliceData.actions
export default getSliceData.reducer