import React from "react"
import {Product} from "../../s3-components/c1-goods-page/g1-product/product";
import {v1} from "uuid";
import {Provider} from "react-redux";
import {store} from "../../s1-bll/b1-store/store";
import {ProductInBasket} from "../../s3-components/c2-basket/b1-product-in-basket/product-in-basker";
import {Header} from "../../s2-common/c3-components/c1-header/header";
import {HashRouter} from "react-router-dom";


const prod = {
    id: v1(),
    copies: 1,
    prise: "$200",
    model: "Some Model",
    img: "",
    brand: "Some Brand",
    name: "Some Name",
    type: "Some Type"
}

export default {
    title: "product-card",

}

const TemplateProductCard = () => {
    return (
        <Provider store={store}>
            <Product product={prod}/>
        </Provider>
    )
}
export const ProductCard = TemplateProductCard.bind({})

// export const ProductCard = () => {
//
//     return (
//         <Provider store={store}>
//             <Product product={prod}/>
//         </Provider>
//     )
// }

export const ProductBasket = () => {
    return (
        <Provider store={store}>
            <ProductInBasket product={prod}/>
        </Provider>
    )
}

export const HeaderSB = () => {
    return (
        <Provider store={store}>
            <HashRouter>
                <Header/>
            </HashRouter>
        </Provider>
    )
}