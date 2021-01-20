import React from 'react'
import styles from './index.module.css'
import theType from '../searchInputs/type'
import Price from '../searchInputs/price'
import AllCities from '../searchInputs/cities'
import SortInput from '../searchInputs/sort'

const Filter = (ChangeHandler, option) => {

    return (
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
                <label htmlFor="bedrooms"><span className={ styles.navSpan }>Bedrooms: </span> </label>
                { theType.bedroomCount(styles.input, ChangeHandler) }
            </div>
            <div className={ styles.searchButton }>
                { option === "RENT" ? (<div className={ styles.imputs } >
                    <label htmlFor="minPrice"><span className={ styles.navSpan }>Min.Price: </span></label>
                    {Price.RentingPrice("minPrice", styles.input, ChangeHandler) } </div>) :
                    (<div className={ styles.imputs } >
                        <label htmlFor="minPrice"><span className={ styles.navSpan }>Min.Price: </span></label>
                        {Price.SellingPrice("minPrice", styles.input, ChangeHandler) } </div>) }
            </div>
            <div className={ styles.searchButton }>
                { option === "RENT" ? (<div className={ styles.imputs } >
                    <label htmlFor="price"><span className={ styles.navSpan }>Max.Price:  </span></label>
                    {Price.RentingPrice("maxPrice", styles.input, ChangeHandler) } </div>) :
                    (<div className={ styles.imputs } >
                        <label htmlFor="price"><span className={ styles.navSpan }>Max. Price: </span></label>
                        {Price.SellingPrice("maxPrice", styles.input, ChangeHandler) } </div>) }
            </div>
            <div className={ styles.newOne }>
        <span className={ styles.navSpan }>Sort by:</span>
        {SortInput(ChangeHandler)}
        </div>
        </div>
    )
}

export default Filter