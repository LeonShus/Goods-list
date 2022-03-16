import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState = {
    isFetching: false
}

const appSlice = createSlice({
    name: "app",
    initialState,
    reducers:{
        setIsFetching(state, action: PayloadAction<{isFetching: false}>){
            state.isFetching = action.payload.isFetching
        }
    }
})

export const appReducer = appSlice.reducer
export const {setIsFetching} = appSlice.actions