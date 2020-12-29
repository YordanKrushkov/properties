import React from 'react';
import pic from '../../images/double-bed.svg'
import styles from './index.module.css'

const CardElement = (propertie, key) => {
    return (
        <div className={ styles.parent } key={ key}>
        <div className={ styles.card } >
            <main>
            <header>
                <img src={ propertie.img } alt="" />
            </header>
            <aside>
            <h1>{propertie.price }</h1>
                <img src={pic} alt="bedroom"/>
                <h5>{ propertie.type }</h5>
                <h6>{ propertie.location }</h6>

            </aside>
            </main>
            <footer>
                <h5>Yordan Krushkov</h5>
                <button>Contact</button>
            </footer>
        </div>
        </div>
     
    )
}
export default CardElement