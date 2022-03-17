import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {goodsAsyncAction} from "../../b4-actions/a1-goods";

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

const updateLocalStorage = (storName: string, data: string) => {
    localStorage.setItem(storName, data)
}

const goodsSlice = createSlice({
    name: "goods",
    initialState,
    reducers: {
        addProductToBasket(state, action: PayloadAction<{ productId: string }>) {
            const prodIndex = state.goods.findIndex(el => el.id === action.payload.productId)

            state.basket.push(state.goods[prodIndex])
            updateLocalStorage("userBasket", JSON.stringify(state.basket))
        },
        increaseCopies(state, action: PayloadAction<{ productId: string }>) {
            const prodIndex = state.basket.findIndex(el => el.id === action.payload.productId)

            state.basket[prodIndex].copies += 1
            updateLocalStorage("userBasket", JSON.stringify(state.basket))
        },
        decreaseCopies(state, action: PayloadAction<{ productId: string }>) {
            const prodIndex = state.basket.findIndex(el => el.id === action.payload.productId)

            state.basket[prodIndex].copies -= 1
            updateLocalStorage("userBasket", JSON.stringify(state.basket))
        },
        removeProductFromBasket(state, action: PayloadAction<{ productId: string }>) {
            const prodIndex = state.basket.findIndex(el => el.id === action.payload.productId)

            state.basket.splice(prodIndex, 1)
            updateLocalStorage("userBasket", JSON.stringify(state.basket))
        },
        removeBasket(state, action: PayloadAction) {
            state.basket = []
            updateLocalStorage("userBasket", JSON.stringify(state.basket))
        },
        setBasketFromLocalStorage(state, action: PayloadAction) {
            const localBasket = localStorage.getItem("userBasket")
            state.basket = JSON.parse(localBasket ? localBasket : "[]")
        }
    },
    extraReducers: builder => {
        builder
            .addCase(getGoodsList.fulfilled, (state, action) => {
                if (action.payload) {
                    state.goods = action.payload.goods
                }
            })
    }
})

export const goodsReducer = goodsSlice.reducer
export const {
    addProductToBasket,
    increaseCopies,
    decreaseCopies,
    removeProductFromBasket,
    removeBasket,
    setBasketFromLocalStorage
} = goodsSlice.actions