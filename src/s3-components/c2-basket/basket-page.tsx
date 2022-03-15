import React from "react"
import {goodsSelectors} from "../../s1-bll/b3-selectors/s1-goods";
import {useSelector} from "react-redux";
import {ProductInBasket} from "./b1-product-in-basket/product-in-basker";
import styles from "./basket-page.module.scss"


export const BasketPage = () => {

    const {arrOfBasket} = goodsSelectors

    const goodsInBasket = useSelector(arrOfBasket)

    const goodsInBasketComponents = goodsInBasket.map(el => {
        return (
          <ProductInBasket key={el.id} product={el}/>
        )
    })

    return(
        <div className={styles.container}>
            Basket
            {goodsInBasketComponents}
        </div>
    )
}