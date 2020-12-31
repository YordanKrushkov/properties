import React, { useState, useEffect } from 'react'
import styles from './index.module.css'
import getProperties from '../../services/getData'

const Rent = () => {
    const [properties, takeProperties] = useState([]);

    useEffect(() => {
    getProperties.getData(takeProperties);
    }, [])

    return (
        <div className={ styles.wrapper } >
            {getProperties.renderProperties(properties, 'RENT' ) }
        </div>
    )
}

export default Rent