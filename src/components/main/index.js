import React from 'react'
import styles from './index.module.css'
import pic from '../../images/istockphoto-1026205392-612x612.jpg'
import Search from '../searchBar'
import Card from '../cards'
const Body = () => {
    return (
        <div className={ styles.container }>
            <div className={ styles.title }>
                <h1>
                    Find your new home
            </h1>
                <h2>for RENT and SELL</h2>
            </div>
            <img src={ pic } alt="No pic" />
            <Search />
        </div>
    )
}
export default Body