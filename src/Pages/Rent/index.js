import React, { useState, useEffect } from 'react'
import styles from './index.module.css'
import getProperties from '../../services/getData'
import AllCities from '../../components/searchInputs/cities'
import theType from '../../components/searchInputs/type'

const Rent = () => {
    const [properties, takeProperties] = useState([]);
    const [filter, getFilter]=useState({
        city:'',
        type:'',
        bedrooms:''
    })


    useEffect(() => {
    getProperties.getData(takeProperties) 
    }, [])
   
  
    const ChangeHandler=(e)=>{
        getFilter({
            ...filter,
            [e.target.id]:e.target.value
        })
    }
 
  
    return (
        <div className={styles.container}>
        <div className={styles.nav}>
        <div className={styles.searchButton}>
                <label htmlFor="city" />
                {AllCities(styles.input, ChangeHandler)}
            </div>
            <div className={styles.searchButton}>
                <label htmlFor="city" />
                {theType.TypeSelect(styles.input, ChangeHandler)}
            </div>
            <div className={styles.searchButton}>
                <label htmlFor="city" />
                {theType.bedroomCount(styles.input, ChangeHandler)}
            </div>
        </div>
        <div className={ styles.wrapper } >
            {getProperties.renderProperties(properties, 'RENT', !filter.city ?'София': filter.city, filter.type)}
        </div>
        </div>
      
    )
}

export default Rent