import React from 'react'
import styles from './index.module.css'
import pic from '../../images/istockphoto-1026205392-612x612.jpg'
import Card from '../../components/cards' 
import Search from '../../components/searchBar'
const Body = () => {
    return (
        <div className={ styles.container }>
            <div className={ styles.title }>
                <h1  className={ styles.h1 }>
                    Find your new home
            </h1>
                <h2  className={ styles.h2}>for RENT and SELL</h2>
            </div>
            <img   className={ styles.img } src={ pic } alt="No pic" />
            <div className={styles.cardContainer}>
            <Card />
            <Search />
            </div>
        </div>
    )
}
export default Body