import React, { useState, useEffect } from 'react'
import styles from './index.module.css'
import CardElement from "../cards/card-elemtent";


const Rent = () => {
    const [properties, getProperties] = useState([]);
    const getData = async () => {
        const promise = await fetch('https://properties-3e020-default-rtdb.firebaseio.com/properties.json');
        const properties = await promise.json();
        getProperties(
            properties)

    }
    const renderProperties = () => {
        return Object.keys(properties).map((propertie) => {
            if (properties[propertie].hasOwnProperty('rent')) {
                let item = properties[propertie]
                let key = propertie;

                return CardElement(item, key)
            }
        })
    }
    useEffect(() => {
        getData();
    }, [])

    return (
        <div className={ styles.wrapper } >
            {renderProperties() }
        </div>

    )
}

export default Rent