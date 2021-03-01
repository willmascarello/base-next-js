// Componens are reaproveitables in any parts of the App

import { useContext } from "react";
import { NameContext } from "../context/NameContext";

import styles from "../styles/components/ComponentToUse.module.css"

export function ComponentToUse() {
    const {isActive, functionActive} = useContext(NameContext); 

    return (
        <header>
            <h2 >Component to Use in the App</h2>
            <p  className={styles.text}>
                Text in Component
            </p>
            <button type="button" onClick={functionActive} className={styles.btn} >
                Show Alert: {String(isActive)}
            </button>
        </header>
    )
}