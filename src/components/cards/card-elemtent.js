import React from 'react';
import {useHistory  } from 'react-router-dom'
import pic from '../../images/double-bed.svg'
import styles from './index.module.css'

const CardElement = (propertie, key) => {

    const history=useHistory()
   
    let char = '';
    if (propertie.bedrooms) {
        char = propertie.bedrooms.charAt(0)
    }
    const id=key;
   const handleClick=(e)=>{
       e.preventDefault()
        history.push(id)
   }
  
    
 
    return (
        <div className={ styles.parent } key={ key }onClick={handleClick}>
            <div className={ styles.card }  >
                <main className={ styles.main}>
                    <header className={ styles.header } >
                        <div className={ styles.imgWrapper }>
                            <img className={ styles.img } src={ propertie.img } alt="propPicture" />

                        </div>
                    </header>
                    <aside className={ styles.aside }>
                        <h1 className={ styles.price }>{ `$ ${propertie.price} p.m`}</h1>
                        <div className={ styles.headerPic } >
                            <img  className={ styles.imgAsside }src={ pic } alt="bedroom" />
                            <div className={ styles.char }> { char } </div>
                        </div>
                        <h5 className={ styles.bedrooms }>{ propertie.bedrooms + ' ' + (propertie.type).toLowerCase() }</h5>
                        <h6 className={ styles.address }>{ propertie.street + ' ' + propertie.city }</h6>

                    </aside>
                </main>
                <footer className={ styles.footer }>
                    <h5 className={ styles.email }>{propertie.ownerId ?(`${propertie.ownerId.name} ${propertie.ownerId.surname} : ${propertie.ownerId.email}`):null}</h5>
                    <button className={ styles.button }>Contact</button>
                </footer>
            </div>
        </div>

    )
}
export default CardElement