import React, {useEffect} from "react";
import styles from "./App.module.scss";
import {HashRouter, Navigate, Route, Routes} from "react-router-dom"
import {GoodsPage} from "./s3-components/c1-goods-page/goods-page";
import {BasketPage} from "./s3-components/c2-basket/basket-page";
import {useAction} from "./s2-common/c1-hooks/hooks";
import {goodsAsyncAction} from "./s1-bll/b4-actions/a1-goods"
import {Header} from "./s2-common/c3-components/c1-header/header";
import {useDispatch, useSelector} from "react-redux";
import {appSelectors} from "./s1-bll/b3-selectors/s2-app";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import {SnackBar} from "./s2-common/c3-components/c3-snack-bar/snack-bar";
import {setBasketFromLocalStorage} from "./s1-bll/b2-reducers/r1-goods/goods-reducer";


export const App = () => {

    const dispatch = useDispatch()
    const {addIsFetching} = appSelectors

    const isFetching = useSelector(addIsFetching)

    const {getGoodsList} = useAction(goodsAsyncAction)

    useEffect(() => {
        getGoodsList({})
        dispatch(setBasketFromLocalStorage())
    }, [])

    return (
        <HashRouter>

            <Header/>
            <SnackBar/>
            {isFetching ?
                <Box
                    sx={{
                        height: "100vh",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                >
                    <CircularProgress/>
                </Box>

                :
                <div className={styles.container}>
                    <Routes>
                        <Route path={"/"} element={<Navigate to={"/goods"}/>}/>
                        <Route path={"goods"} element={<GoodsPage/>}/>
                        <Route path={"basket"} element={<BasketPage/>}/>
                    </Routes>
                </div>
            }


        </HashRouter>
    );
}
