import React from "react"
import styles from "./product.module.scss"
import { ProductType } from "../../../s1-bll/b2-reducers/r1-goods/goods-reducer"

type ProductPropsType = {
    product: ProductType
}

export const Product = ({product}: ProductPropsType) => {
    return(
        <div className={styles.container}>
            <img src={product.img ? product.img : ""} alt="product photo"/>
            <div>{product.brand}</div>
            <div>{product.name}</div>
            <div>{product.model}</div>
            <div>{product.prise}</div>
        </div>
    )
}