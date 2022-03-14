import React, {useContext, useEffect} from "react";
import {Context} from "./index";
import styles from "./App.module.scss";
import { collection, addDoc, getDocs, doc, setDoc } from "firebase/firestore";
import {v1} from "uuid";



export const App = () => {

    const {firestore} = useContext(Context)

    const setDocs = async () => {

        try {
            const id = v1()
            const res = await setDoc(doc(firestore, "goods", id), {
                name: "Sony",
                model: "1111",
                year: 20092
            });
        } catch (e) {
            console.log("Error", e)
        }
    }

    const addGoods = async () => {
        try{
            const res = await addDoc(collection(firestore, "goods"), {
                name: "TV",
                model: "55UTR",
                year: 2010
            })
            console.log("Document written with ID: ", res.id)
        } catch (e) {
            console.log("Error", e)
        }
    }
    console.log(firestore)
    const getGoodsCollection = async () => {
        let res = await getDocs(collection(firestore, "goods"))

        res.forEach(el => {
            console.log(`${el.id} => ${JSON.stringify(el.data())}`)
        })
    }

    useEffect(() => {
        getGoodsCollection()
    }, [])

    return (
        <div className={styles.container}>
            Goods
            <button onClick={addGoods}>Add</button>
            <button onClick={setDocs}>Set</button>
        </div>
    );
}
