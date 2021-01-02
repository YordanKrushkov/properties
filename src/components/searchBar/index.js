import React, { useState, useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import styles from './index.module.css'
import AllCities from '../searchInputs/cities'
import Price from '../searchInputs/price'
import inputs from '../searchInputs/type'
import get from '../../services/getData'

const Search = () => {
    const [way, changeOption] = useState('RENT');
    const [style, changeStyle] = useState(true);
    const [properties, takeProperties] = useState([]);
    const [search, changeSearch] = useState({})
    const history = useHistory()
    useEffect(() => {
        get.getData(takeProperties);
    }, [])
    const clickHendler = (e) => {
        changeOption(e.target.textContent)
        if (e.target.textContent === 'SELL') {
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

    useEffect(() => {

    }, [changeHandler])

    const searchIt = (e) => {
        e.preventDefault()
        history.push('/search')
   

    }
    return (
        <form action="" onSubmit={ searchIt }>
            <div className={ styles.card }>
                <header className={ styles.header }>
                    <ul className={ styles.headerContainer }>
                        <li onClick={ clickHendler } value='RENT' className={ style ? styles.new : styles.sellOrRent }>RENT</li>
                        <li onClick={ clickHendler } value='SELL' className={ style ? styles.sellOrRent : styles.new }>SELL</li>
                    </ul>
                </header>
                <main className={ styles.main }>
                    <h4 className={ styles.searchCardTitle }> Search for Property </h4>
                    <div className={ styles.imputs } >
                        <label htmlFor="town">Town</label>
                        { AllCities(styles.options, changeHandler) }
                    </div>

                    { way === "RENT" ? (<div className={ styles.imputs } >
                        <label htmlFor="price">Min.Price</label>
                        {Price.RentingPrice("minPrice", styles.options, changeHandler) } </div>) :
                        (<div className={ styles.imputs } >
                            <label htmlFor="price">Min.Price</label>
                            {Price.SellingPrice("minPrice", styles.options, changeHandler) } </div>) }

                    { way === "RENT" ? (<div className={ styles.imputs } >
                        <label htmlFor="price">Max.Price</label>
                        {Price.RentingPrice("minPrice", styles.options, changeHandler) } </div>) :
                        (<div className={ styles.imputs } >
                            <label htmlFor="price">Max.Price</label>
                            {Price.SellingPrice("maxPrice", styles.options, changeHandler) } </div>) }

                    <div className={ styles.typeContainer }>
                        <div className={ styles.type }>
                            <label htmlFor="type">Property Type</label>
                            { inputs.TypeSelect(styles.typeflat, changeHandler) }
                        </div>

                        <div className={ styles.type }>
                            <label htmlFor="type">Bedroom</label>
                            { inputs.bedroomCount(styles.typeflat, changeHandler) }
                        </div>
                    </div>

                </main>
                <button>SEARCH</button>
            </div>
            {get.renderProperties(properties) }
        </form>
    )
}
export default Search;