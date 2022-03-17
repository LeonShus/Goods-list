import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type PopupMessageType = {
    type: "error" | "success"
    message: string
    id: string
}

const initialState = {
    isFetching: false,
    popupMessages: [] as PopupMessageType[]
}

const appSlice = createSlice({
    name: "app",
    initialState,
    reducers:{
        setIsFetching(state, action: PayloadAction<{isFetching: boolean}>){
            state.isFetching = action.payload.isFetching
        },
        setPopupMessages(state, action: PayloadAction<{ popupMessage: PopupMessageType }>) {
            state.popupMessages.push(action.payload.popupMessage)
        },
        deletePopupMessages(state, action: PayloadAction<{ popupMessages: PopupMessageType[] }>) {
            state.popupMessages = action.payload.popupMessages
        }
    }
})

export const appReducer = appSlice.reducer
export const {setIsFetching, setPopupMessages, deletePopupMessages} = appSlice.actions