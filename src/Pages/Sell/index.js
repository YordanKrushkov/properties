import React, { useState, useEffect } from 'react';
import styles from './index.module.css';
import getProperties from '../../services/getData'
import Filter from '../../components/filterBar/filter'
import add from '../../images/add.gif'
import add1 from '../../images/add1.gif'

const Sell = () => {
    const [properties, takeProperties] = useState([]);
    const [filter, getFilter] = useState({
        city: '',
        type: '',
        bedrooms: '',
        minPrice: '',
        maxPrice: '',
        sortBy: '',
    })

    const ChangeHandler = (e) => {
        getFilter({
            ...filter,
            [e.target.id]: e.target.value
        })
    }
    useEffect(() => {
        getProperties.getSome(takeProperties, 'SALE', filter)
    }, [filter])

    return (
        <div className={ styles.containerWrapper }>
            {Filter(ChangeHandler, 'SALE') }
            <div className={ styles.container }>


                <div className={ styles.wrapper } >
                    { getProperties.renderProperties(properties) }
                </div>
                <aside className={ styles.aside }>
                    <img className={ styles.img } src={ add1 } alt="advert" />
                    <img className={ styles.img } src={ add } alt="advert" />
                </aside>
            </div>


        </div>

    )
}

export default Sell