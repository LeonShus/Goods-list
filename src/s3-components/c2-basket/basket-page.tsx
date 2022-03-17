import React, {useState} from "react"
import {goodsSelectors} from "../../s1-bll/b3-selectors/s1-goods";
import {useSelector} from "react-redux";
import {ProductInBasket} from "./b1-product-in-basket/product-in-basker";
import styles from "./basket-page.module.scss"
import Button from "@mui/material/Button";
import {ModalCustom} from "../../s2-common/c3-components/c2-modal/modal";
import {BuyForm} from "./b2-buy-form/buy-form";
import {Link} from "react-router-dom";


export const BasketPage = () => {

    const [wantToBuy, setWantToBuy] = useState(false)

    const openBuyModal = () => {
        setWantToBuy(true)
    }
    const closeBuyModal = () => {
        setWantToBuy(false)
    }

    const {arrOfBasket} = goodsSelectors

    const goodsInBasket = useSelector(arrOfBasket)

    const basketPrise = goodsInBasket.reduce((sum, el) => sum + (+el.prise.slice(1) * el.copies), 0)

    const goodsInBasketComponents = goodsInBasket.map(el => {
        return (
            <ProductInBasket key={el.id} product={el}/>
        )
    })

    return (
        <div className={styles.container}>
            <ModalCustom
                isOpen={wantToBuy}
                close={closeBuyModal}
            >
                <div>
                    <BuyForm/>
                </div>
            </ModalCustom>

            {basketPrise ?
                <div className={styles.buyContainer}>
                    <div className={styles.prise}>
                        {"$" + basketPrise}
                    </div>
                    <Button
                        variant={"contained"}
                        onClick={openBuyModal}
                    >
                        Order
                    </Button>
                </div>
                :
                <div className={styles.emptyContainer}>
                    <h2>Basket is empty</h2>
                    <Link to={"/goods"}>
                        <Button>
                            Continue shopping
                        </Button>
                    </Link>

                </div>

            }

            <div className={styles.containerItems}>
                {goodsInBasketComponents}
            </div>
        </div>
    )
}