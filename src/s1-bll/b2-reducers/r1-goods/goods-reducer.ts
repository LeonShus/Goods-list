import {createSlice} from "@reduxjs/toolkit";
import { goodsAsyncAction } from "../../b4-actions/a1-goods";

const {getGoodsList} = goodsAsyncAction

export type ProductType = {
    id: string
    type: string
    brand: string
    name: string
    model: string
    prise: string
    img: string
}

const initialState = {
    goods: [] as ProductType[]
}

const goodsSlice = createSlice({
    name: "goods",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getGoodsList.fulfilled, (state, action) => {
                if(action.payload){
                    state.goods = action.payload.goods
                }
            })
    }
})


export const goodsReducer = goodsSlice.reducer