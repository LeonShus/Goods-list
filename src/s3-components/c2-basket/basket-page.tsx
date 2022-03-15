import React from "react"
import {goodsSelectors} from "../../s1-bll/b3-selectors/s1-goods";
import {useSelector} from "react-redux";
import {ProductInBasket} from "./b1-product-in-basket/product-in-basker";
import styles from "./basket-page.module.scss"
import Button from "@mui/material/Button";


export const BasketPage = () => {

    const {arrOfBasket} = goodsSelectors

    const goodsInBasket = useSelector(arrOfBasket)

    const basketPrise = goodsInBasket.reduce((sum, el) => sum + (+el.prise.slice(1) * el.copies), 0)

    const goodsInBasketComponents = goodsInBasket.map(el => {
        return (
          <ProductInBasket key={el.id} product={el}/>
        )
    })

    return(
        <div className={styles.container}>
            <div className={styles.buyContainer}>
                <div className={styles.prise}>
                    {"$" + basketPrise}
                </div>
                <Button
                    variant={"contained"}
                >
                    Buy
                </Button>
            </div>
            <div className={styles.containerItems}>
                {goodsInBasketComponents}
            </div>
        </div>

    )
}