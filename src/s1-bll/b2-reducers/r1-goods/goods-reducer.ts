import {createSlice, PayloadAction} from "@reduxjs/toolkit";
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
    goods: [] as ProductType[],
    basket: [] as ProductType[]
}

const goodsSlice = createSlice({
    name: "goods",
    initialState,
    reducers: {
        addProductToBasket(state, action: PayloadAction<{productId: string}>){
            const prodIndex = state.goods.findIndex(el => el.id === action.payload.productId)

            state.basket.push(state.goods[prodIndex])

        }
    },
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
export const {addProductToBasket} =  goodsSlice.actions