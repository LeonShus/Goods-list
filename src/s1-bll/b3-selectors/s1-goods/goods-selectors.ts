import {RootStateType} from "../../b1-store/store";


export const arrOfGoods = (state: RootStateType) => state.goods.goods
export const arrOfBasket = (state: RootStateType) => state.goods.basket