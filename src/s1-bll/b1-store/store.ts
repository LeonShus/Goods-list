import {combineReducers, configureStore} from "@reduxjs/toolkit";
import { goodsReducer } from "../b2-reducers/r1-goods/goods-reducer";
import thunk from "redux-thunk"
import {appReducer} from "../b2-reducers/r2-app/app-reducer";

const rootReducer = combineReducers({
    app: appReducer,
    goods: goodsReducer
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunk)
})

export type RootStateType = ReturnType<typeof rootReducer>


//@ts-ignore
window.store = store