import React, { useState, useEffect } from 'react'
import getProperties from '../../services/getData'
import styles from './index.module.css'
import Filter from '../../components/filterBar/filter'



const Properties = (searcher) => {
    const [properties, takeProperties] = useState([])
    const [filter, getFilter] = useState({
        city: '',
        type: '',
        bedrooms: '',
        minPrice: '',
        maxPrice: '',
        sortBy: '',
    })
    const search = searcher.location.state
    useEffect(() => {
        getProperties.getSome(takeProperties, search.sellOrRent, filter)
    }, [filter])
    const ChangeHandler = (e) => {
        getFilter({
            ...filter,
            [e.target.id]: e.target.value
        })
    }
    return (
        <div className={ styles.containerWrapper }>
            {Filter(ChangeHandler, search.sellOrRent) }
            <div className={ styles.container }>


                <div className={ styles.wrapper } >
                    { getProperties.renderProperties(properties) }
                </div>
                <aside className={ styles.aside }>
                    <div className={ styles.assideWrapper }></div>
                </aside>
            </div>


        </div>
    )

}
export default Properties