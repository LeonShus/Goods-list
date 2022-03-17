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
    copies: number
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

        },
        increaseCopies(state, action: PayloadAction<{productId: string}>){
            const prodIndex = state.basket.findIndex(el => el.id === action.payload.productId)

            state.basket[prodIndex].copies += 1
        },
        decreaseCopies(state, action: PayloadAction<{productId: string}>){
            const prodIndex = state.basket.findIndex(el => el.id === action.payload.productId)

            state.basket[prodIndex].copies -= 1
        },
        removeProductFromBasket(state, action: PayloadAction<{productId: string}>){
            const prodIndex = state.basket.findIndex(el => el.id === action.payload.productId)

            state.basket.splice(prodIndex,1)
        },
        removeBasket(state, action: PayloadAction){
            state.basket = []
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
export const {addProductToBasket, increaseCopies, decreaseCopies, removeProductFromBasket, removeBasket} =  goodsSlice.actions