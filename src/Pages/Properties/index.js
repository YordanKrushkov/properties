import React, { useState, useEffect } from 'react'
import getProperties from '../../services/getData'
import styles from './index.module.css'
import Filter from '../../components/filterBar/filter'



const Properties = (searcher) => {
    const search = searcher.location.state
    const [properties, takeProperties] = useState([])
    const [filter, getFilter] = useState({
        city: search.city || '',
        type: search.type || '',
        bedrooms: search.bedrooms || '',
        minPrice: search.minPrice || '',
        maxPrice: search.maxPrice || '',
        sortBy: '',
    })
    let isMouted = false;
    console.log(search);
    console.log('filter:', filter);
    useEffect(() => {
        getProperties.SearchItem(takeProperties, search)
        isMouted = true
    }, [])
    useEffect(() => {
        if (isMouted === false) {
            getProperties.getSome(takeProperties, search.sellOrRent, filter)
        }
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