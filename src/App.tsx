import React, {useEffect} from "react";
import styles from "./App.module.scss";
import {HashRouter, Navigate, Route, Routes} from "react-router-dom"
import {GoodsPage} from "./s3-components/c1-goods-page/goods-page";
import {BasketPage} from "./s3-components/c2-basket/basket-page";
import {useAction} from "./s2-common/c1-hooks/hooks";
import {goodsAsyncAction} from "./s1-bll/b4-actions/a1-goods"


export const App = () => {

    const {getGoodsList} = useAction(goodsAsyncAction)

    useEffect(() => {
        getGoodsList({})
    }, [])

    return (
        <HashRouter>
            <div className={styles.container}>
                <Routes>
                    <Route path={"/"} element={<Navigate to={"/goods"}/>}/>
                    <Route path={"goods"} element={<GoodsPage/>}/>
                    <Route path={"basket"} element={<BasketPage/>}/>
                </Routes>
            </div>
        </HashRouter>
    );
}
