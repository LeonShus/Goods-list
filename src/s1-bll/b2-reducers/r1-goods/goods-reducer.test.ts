import {v1} from "uuid";
import {
    addProductToBasket,
    decreaseCopies,
    goodsReducer,
    increaseCopies,
    ProductType,
    removeBasket,
    removeProductFromBasket
} from "./goods-reducer";

type startStateType = {
    goods: ProductType[],
    basket: ProductType[]
}
let startState: startStateType

const goodsId_01 = v1()
const goodsId_02 = v1()

beforeEach(() => {
    startState = {
        goods: [
            {
                id: goodsId_01,
                copies: 1,
                prise: "$200",
                model: "Some Model",
                img: "",
                brand: "Some Brand",
                name: "Some Name",
                type: "Some Type"
            },
            {
                id: goodsId_02,
                copies: 1,
                prise: "$400",
                model: "Some Model2",
                img: "",
                brand: "Some Brand2",
                name: "Some Name2",
                type: "Some Type2"
            }
        ],
        basket: [
            {
                id: goodsId_02,
                copies: 2,
                prise: "$400",
                model: "Some Model2",
                img: "",
                brand: "Some Brand2",
                name: "Some Name2",
                type: "Some Type2"
            },
        ]
    }
})

test("Add product to basket", () => {
    const action = addProductToBasket({productId: goodsId_01})

    const endState = goodsReducer(startState, action)

    expect(endState.basket.length).toEqual(2)
    expect(endState.basket[1].id).toEqual(goodsId_01)
})


test("Increase product copies", () => {
    const action = increaseCopies({productId: goodsId_02})

    const endState = goodsReducer(startState, action)

    expect(endState.basket.length).toEqual(1)
    expect(endState.basket[0].id).toEqual(goodsId_02)
    expect(endState.basket[0].copies).toEqual(3)
})


test("Decrease product copies", () => {
    const action = decreaseCopies({productId: goodsId_02})

    const endState = goodsReducer(startState, action)

    expect(endState.basket.length).toEqual(1)
    expect(endState.basket[0].id).toEqual(goodsId_02)
    expect(endState.basket[0].copies).toEqual(1)
})


test("Remove product from basket", () => {
    const action = removeProductFromBasket({productId: goodsId_02})

    const endState = goodsReducer(startState, action)

    expect(endState.basket.length).toEqual(0)
})


test("Remove basket", () => {
    const action = removeBasket()

    const endState = goodsReducer(startState, action)

    expect(endState.basket.length).toEqual(0)
})



