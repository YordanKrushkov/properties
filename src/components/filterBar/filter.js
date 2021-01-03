import React from 'react'
import styles from './index.module.css'
import theType from '../searchInputs/type'
import AllCities from '../searchInputs/cities'


const Filter=(ChangeHandler)=>{

    return(
        <div id='filterBar' className={ styles.nav } >
                    <span className={ styles.navSpan }>Filter:</span>
                    <div className={ styles.searchButton }>
                        <label htmlFor="city" ><span className={ styles.navSpan }>City: </span> </label>
                        { AllCities(styles.input, ChangeHandler) }
                    </div>
                    <div className={ styles.searchButton }>
                        <label htmlFor="type" ><span className={ styles.navSpan }>Type: </span></label>
                        { theType.TypeSelect(styles.input, ChangeHandler) }
                    </div>
                    <div className={ styles.searchButton }>
                        <label htmlFor="city"><span className={ styles.navSpan }>Bedrooms: </span> </label>
                        { theType.bedroomCount(styles.input, ChangeHandler) }
                    </div>
                </div>
    )
}

export default Filter