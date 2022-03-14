import React, {createContext} from "react"
import ReactDOM from "react-dom"
import {App} from "./App"
import reportWebVitals from "./reportWebVitals"
import {initializeApp} from "firebase/app"
import {Firestore, getFirestore} from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyCwO1g2KqfL1_uQk5HBFixmniDtO44szTg",
    authDomain: "goods-list-8f723.firebaseapp.com",
    projectId: "goods-list-8f723",
    storageBucket: "goods-list-8f723.appspot.com",
    messagingSenderId: "377739574078",
    appId: "1:377739574078:web:26debfa8a57cf34835ca6f",
    measurementId: "G-NE064L3X2E"
}
initializeApp(firebaseConfig)
const firestore = getFirestore()

type ContextType = {
    firestore: Firestore
}

export const Context = createContext({} as ContextType)

ReactDOM.render(
    <React.StrictMode>
        <Context.Provider value={{
            firestore,
        }}>
            <App/>
        </Context.Provider>
    </React.StrictMode>,
    document.getElementById("root")
);

reportWebVitals();
