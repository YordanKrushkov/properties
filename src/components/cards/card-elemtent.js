import React from 'react';
import {useHistory  } from 'react-router-dom'
import pic from '../../images/double-bed.svg'
import styles from './index.module.css'

const CardElement = (propertie, key) => {

    const history=useHistory()
    let bedrooms = propertie.bedrooms;
    let char = '';
    if (bedrooms) {
        char = bedrooms.charAt(0)
    }
    const id=key;
   const handleClick=(e)=>{
       e.preventDefault()
        history.push(id)
   }
  
    
 
    return (
        <div className={ styles.parent } key={ key }onClick={handleClick}>
            <div className={ styles.card }  >
                <main>
                    <header className={ styles.header } >
                        <div className={ styles.imgWrapper }>
                            <img className={ styles.img } src={ propertie.img } alt="propPicture" />

                        </div>
                    </header>
                    <aside>
                        <h1>{ `$ ${propertie.price} p.m`}</h1>
                        <div className={ styles.headerPic } >
                            <img src={ pic } alt="bedroom" />
                            <div className={ styles.char }> { char } </div>
                        </div>
                        <h5>{ propertie.bedrooms + ' ' + (propertie.type).toLowerCase() }</h5>
                        <h6>{ propertie.street + ' ' + propertie.city }</h6>

                    </aside>
                </main>
                <footer>
                    <h5>{propertie.email}</h5>
                    <button>Contact</button>
                </footer>
            </div>
        </div>

    )
}
export default CardElement