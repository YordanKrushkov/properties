import React from 'react'
import styles from './index.module.css'
import pic from '../../images/britishHouse2.jpg'
import Card from '../../components/cards'
import Search from '../../components/searchBar'
import notification from '../../components/notifications'
import notify from '../../utils/notification'
const Body = (props) => {
    const message = props.location.state
    if (message) {
        notify('notification')
    }
    return (
        <div className={ styles.container }>
            {message ? notification(message) : null }
            <div className={ styles.title }>
                <h1 className={ styles.h1 }>
                    Find your new home
            </h1>
                <ul className={ styles.ul }>
                    <li className={ styles.h2 }>Rent</li>
                    <li className={ styles.h2 }>Buy</li>
                    <li className={ styles.h2 }>Sell</li>
                </ul>
            </div>
            <img className={ styles.img } src={ pic } alt="No pic" />
            <Search />
            <div className={ styles.cardContainer }>
                <Card />
            </div>
        </div>
    )
}
export default Body