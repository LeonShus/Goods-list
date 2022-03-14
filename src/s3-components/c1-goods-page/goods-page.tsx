import React from "react"
import styles from "./goods-page.module.scss"
import {Product} from "./g1-product/product";
import {useSelector} from "react-redux";
import {goodsSelectors} from "../../s1-bll/b3-selectors/s1-goods"

export const GoodsPage = () => {

    const {arrOfGoods} = goodsSelectors
    const goodsArr = useSelector(arrOfGoods)

    console.log(goodsArr)

    const goodsComponents = goodsArr.map(el => {
        return (
            <Product
                key={el.id}
                product={el}
            />
        )
    })

    return (
        <div className={styles.container}>
            {goodsComponents}
        </div>
    )
}