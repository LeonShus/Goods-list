import React from "react"
import {
    decreaseCopies,
    increaseCopies,
    ProductType,
    removeProductFromBasket
} from "../../../s1-bll/b2-reducers/r1-goods/goods-reducer"
import styles from "./product-in-basker.module.scss"
import Button from "@mui/material/Button"
import {useDispatch} from "react-redux";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

type ProductInBasketPropsType = {
    product: ProductType
}

export const ProductInBasket = ({product}: ProductInBasketPropsType) => {

    const dispatch = useDispatch()

    const increaseCopy = () => {
        dispatch(increaseCopies({productId: product.id}))
    }

    const decreaseCopy = () => {
        dispatch(decreaseCopies({productId: product.id}))
    }

    const removeItem = () => {
        dispatch(removeProductFromBasket({productId: product.id}))
    }

    return (
        <div className={styles.container}>
            <div>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{
                        mr: 2,
                        position: "absolute",
                        left: "248px",
                        top: "-4px"
                    }}
                    onClick={removeItem}
                >
                    <CloseIcon/>
                </IconButton>
            </div>
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
                    variant={"outlined"}
                    sx={{margin: "10px 0 10px 0"}}
                    onClick={decreaseCopy}
                    disabled={product.copies <= 1}
                >
                    -
                </Button>
                <span className={styles.copies}>
                    {product.copies}
                </span>

                <Button
                    variant={"outlined"}
                    sx={{margin: "10px 0 10px 0"}}
                    onClick={increaseCopy}
                    disabled={product.copies >= 10}
                >
                    +
                </Button>
            </div>
        </div>
    )
}