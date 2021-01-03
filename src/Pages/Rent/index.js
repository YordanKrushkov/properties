import React, { useState, useEffect } from 'react'
import styles from './index.module.css'
import getProperties from '../../services/getData'
import Filter from '../../components/filterBar/filter'
const Rent = () => {
    const [properties, takeProperties] = useState([]);
    const [filter, getFilter] = useState({
        city: '',
        type: '',
        bedrooms: ''
    })


    useEffect(() => {
        getProperties.getData(takeProperties)
    }, [])


    const ChangeHandler = (e) => {
        getFilter({
            ...filter,
            [e.target.id]: e.target.value
        })
    }
    const showProp = (e) => {
        document.getElementById('filterBar').style.display = 'flex';
    }

    return (
        <div className={ styles.containerWrapper }>
            {Filter(ChangeHandler)}
            <div className={ styles.container } onMouseOver={ showProp }>
            

                <div className={ styles.wrapper } >
                    { getProperties.renderProperties(properties, 'RENT', !filter.city ? 'София' : filter.city, filter.type) }
                </div>
                <aside className={ styles.aside }>
                <div className={ styles.assideWrapper }></div>
            </aside>
            </div>
         

        </div>

    )
}

export default Rent