import React from "react"
import styles from "./product.module.scss"
import {ProductType} from "../../../s1-bll/b2-reducers/r1-goods/goods-reducer"
import Button from "@mui/material/Button"

type ProductPropsType = {
    product: ProductType
}

export const Product = ({product}: ProductPropsType) => {
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
                >
                    Buy
                </Button>
            </div>
        </div>
    )
}