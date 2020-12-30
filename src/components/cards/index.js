import React, { useEffect, useState } from 'react';
import styles from './index.module.css'
import getProperties from '../../services/getData';
const Card = () => {
    const [properties, takeProperties] = useState([])


    useEffect(() => {
       getProperties.getData(takeProperties)
    }, [])

    return (
        <div className={ styles.wrapper } >
            {getProperties.renderProperties(properties, 'home') }
        </div>

    )

}
export default Card;