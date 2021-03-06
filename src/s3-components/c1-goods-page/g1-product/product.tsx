import React from "react"
import styles from "./product.module.scss"
import {addProductToBasket, ProductType} from "../../../s1-bll/b2-reducers/r1-goods/goods-reducer"
import Button from "@mui/material/Button"
import {useDispatch, useSelector} from "react-redux";
import {goodsSelectors} from "../../../s1-bll/b3-selectors/s1-goods";

type ProductPropsType = {
    product: ProductType
}

export const Product = ({product}: ProductPropsType) => {

    const dispatch = useDispatch()

    const {arrOfBasket} = goodsSelectors

    const basket = useSelector(arrOfBasket)

    const inBasket = !!basket.find(el => el.id === product.id)

    const addProduct = () => {
        dispatch(addProductToBasket({productId: product.id}))
    }

    return (
        <div className={styles.container}>
            <div>
                <img src={product.img ? product.img : ""} alt="product photo"/>
            </div>
            <div className={styles.brand}>
                {product.brand}
            </div>
            <div className={styles.name}>
                <div>{product.name}</div>
                <div>{product.model}</div>
            </div>
            <div className={styles.prise}>
                {product.prise}
            </div>
            <div>
                <Button
                    variant={"contained"}
                    sx={{margin: "10px 0 10px 0"}}
                    onClick={addProduct}
                    disabled={inBasket}
                >
                    {inBasket ? "In basket" : "Buy"}
                </Button>
            </div>
        </div>
    )
}