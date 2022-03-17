import {createAsyncThunk} from "@reduxjs/toolkit";
import {collection, doc, getDocs, getFirestore, setDoc} from "firebase/firestore";
import {initializeApp} from "firebase/app";
import {setIsFetching, setPopupMessages} from "../../b2-reducers/r2-app/app-reducer";
import {v1} from "uuid";
import {RootStateType} from "../../b1-store/store";
import { removeBasket } from "../../b2-reducers/r1-goods/goods-reducer";

const firebaseConfig = {
    apiKey: "AIzaSyCwO1g2KqfL1_uQk5HBFixmniDtO44szTg",
    authDomain: "goods-list-8f723.firebaseapp.com",
    projectId: "goods-list-8f723",
    storageBucket: "goods-list-8f723.appspot.com",
    messagingSenderId: "377739574078",
    appId: "1:377739574078:web:26debfa8a57cf34835ca6f",
    measurementId: "G-NE064L3X2E"
}
initializeApp(firebaseConfig)
const db = getFirestore()


export const getGoodsList = createAsyncThunk(
    "goods/getGoodsList",
    async (param: {}, thunkAPI) => {
        try {
            thunkAPI.dispatch(setIsFetching({isFetching: true}))
            const res = await getDocs(collection(db, "goods"))

            let goods: any = []

            res.forEach(el => {
                goods.push(el.data())
            })
            return {goods: goods}
        } catch (e: any) {
            thunkAPI.dispatch(setPopupMessages({
                popupMessage: {
                    type: "error",
                    message: `${e.response.data.error}`,
                    id: v1()
                }
            }))
        } finally {
            thunkAPI.dispatch(setIsFetching({isFetching: false}))
        }
    }
)

type AddOrderParamsType = {
    fullName: string,
    address: string,
    phone: string,
}

export const addOrder = createAsyncThunk<{},AddOrderParamsType,{state: RootStateType} >(
    "goods/addOrder",
    async (
        param,
        thunkAPI) => {
        try {
            thunkAPI.dispatch(setIsFetching({isFetching: true}))

            const state = thunkAPI.getState()
            const basket = state.goods.basket

            const order = {
                id: v1(),
                fullName: param.fullName,
                address: param.address,
                phone: param.phone,
                basket
            }
            const orderData = JSON.stringify(order)

            const res = await setDoc(doc(db, "Orders", v1()), {
                orderData
            })
            thunkAPI.dispatch(removeBasket())
        } catch (e: any) {
            thunkAPI.dispatch(setPopupMessages({
                popupMessage: {
                    type: "error",
                    message: `${e.response.data.error}`,
                    id: v1()
                }
            }))
        } finally {
            thunkAPI.dispatch(setIsFetching({isFetching: false}))
        }
    }
)