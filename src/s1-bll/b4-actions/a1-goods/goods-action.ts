import {createAsyncThunk} from "@reduxjs/toolkit";
import {collection, getDocs, getFirestore} from "firebase/firestore";
import {initializeApp} from "firebase/app";

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
const firestore = getFirestore()


export const getGoodsList = createAsyncThunk(
    "goods/getGoodsList",
    async (param: {}, thunkAPI) => {
        try {
            const res = await getDocs(collection(firestore, "goods"))

            let goods: any = []

            res.forEach(el => {
                goods.push(el.data())
            })
            return {goods: goods}
        } catch (e) {

        } finally {

        }
    }
)