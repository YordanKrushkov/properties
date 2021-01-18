import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import styles from './index.module.css'
import AllCities from '../searchInputs/cities'
import Price from '../searchInputs/price'
import inputs from '../searchInputs/type'

const Search = () => {
    const [style, changeStyle] = useState(true);
    const [search, changeSearch] = useState({ sellOrRent: 'RENT' })
    const history = useHistory()

    const clickHendler = (e) => {

        changeSearch({
            ...search,
            sellOrRent: e.target.textContent
        })
        if (e.target.textContent === 'SALE') {
            changeStyle(false)
        } else {
            changeStyle(true)
        }
    };

    const changeHandler = (e) => {
        changeSearch({
            ...search,
            [e.target.id]: e.target.value
        })
    }

    const searchIt = (e) => {
        e.preventDefault()
        history.push({
            pathname: '/properties',
            search: `?sellOrRent=${search.sellOrRent}&city=${search.city}&type=${search.type}&bedrooms=${search.bedrooms}&minPrice=${search.minPrice}&maxPrice=${search.maxPrice}`,
            state: search
        })

    }
    return (
        <form action="" onSubmit={ searchIt }>
            <div className={ styles.card }>
                <header className={ styles.header }>
                    <ul className={ styles.headerContainer }>
                        <li onClick={ clickHendler } value='RENT' className={ style ? styles.new : styles.sellOrRent }>RENT</li>
                        <li onClick={ clickHendler } value='SELL' className={ style ? styles.sellOrRent : styles.new }>SALE</li>
                    </ul>
                </header>
                <main className={ styles.main }>
                    <h4 className={ styles.searchCardTitle }> Search for Property </h4>
                    <div className={ styles.imputs } >
                        <label htmlFor="city">City</label>
                        { AllCities(styles.options, changeHandler, true) }
                    </div>

                    { search.sellOrRent === "RENT" ? (<div className={ styles.imputs } >
                        <label htmlFor="price">Min.Price</label>
                        {Price.RentingPrice("minPrice", styles.options, changeHandler) } </div>) :
                        (<div className={ styles.imputs } >
                            <label htmlFor="price">Min.Price</label>
                            {Price.SellingPrice("minPrice", styles.options, changeHandler) } </div>) }

                    { search.sellOrRent === "RENT" ? (<div className={ styles.imputs } >
                        <label htmlFor="price">Max.Price</label>
                        {Price.RentingPrice("maxPrice", styles.options, changeHandler) } </div>) :
                        (<div className={ styles.imputs } >
                            <label htmlFor="price">Max.Price</label>
                            {Price.SellingPrice("maxPrice", styles.options, changeHandler) } </div>) }

                    <div className={ styles.typeContainer }>
                        <div className={ styles.type }>
                            <label htmlFor="type">Property Type</label>
                            { inputs.TypeSelect(styles.typeflat, changeHandler, 'false') }
                        </div>

                        <div className={ styles.type }>
                            <label htmlFor="type">Bedroom</label>
                            { inputs.bedroomCount(styles.typeflat, changeHandler) }
                        </div>
                    </div>

                </main>
                <button>SEARCH</button>
            </div>
        </form>
    )
}
export default Search;