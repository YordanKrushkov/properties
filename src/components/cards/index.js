import React, { useEffect, useState } from 'react';
import styles from './index.module.css'
import CardElement from "./card-elemtent";
import getProperties from '../../services/getData';
const Card = () => {
    const [properties, takeProperties] = useState([])

    const renderProperties = () => {

        return Object.keys(properties).map((propertie) => {
            let item = properties[propertie]
            let key = propertie;
            return CardElement(item, key)
        })
    }
    useEffect(() => {
       getProperties.getData(takeProperties)
    }, [])

    return (
        <div className={ styles.wrapper } >
            {renderProperties() }
        </div>

    )

}
export default Card;