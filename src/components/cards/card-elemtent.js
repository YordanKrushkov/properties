import React from 'react';
import {useHistory  } from 'react-router-dom'
import pic from '../../images/double-bed.svg'
import bathpic from '../../images/bath.svg'
import styles from './index.module.css'

const CardElement = (propertie, key) => {
    const history=useHistory()
   
    let char = '';
    let bath=''
    if (propertie.bedrooms && propertie.bedrooms!=='Studio') {
        char = propertie.bedrooms.charAt(0)
    }else{
        char='1'
    }
    if (propertie.bathroom) {
        bath = propertie.bathroom.charAt(0)
    }
    const id=key;
   const handleClick=(e)=>{
       e.preventDefault()
        history.push(id)
   }
  
    
 
    return (
        <div className={ styles.parent } key={ key }>
            <div className={ styles.card }  >
                <main className={ styles.main}>
                    <header className={ styles.header } >
                        <div className={ styles.imgWrapper }>
                            <img className={ styles.img } src={ propertie.img } alt="propPicture" />

                        </div>
                    </header>
                    <aside className={ styles.aside }>
                        <h1 className={ styles.price }>{ `£ ${propertie.price} ${propertie.sellOrRent==='RENT' ?'p.m' : '' }`}</h1>
                        <div className={styles.imageWrapper}>
                        <div className={ styles.headerPic } >
                            <img  className={ styles.imgAsside }src={ pic } alt="bedroom" />
                            <div className={ styles.char }> { char } </div>
                        </div>
                        <div className={ styles.headerPic } >
                            <img  className={ styles.imgAsside }src={ bathpic } alt="bedroom" />
                            <div className={ styles.char }> { bath } </div>
                        </div>
                        </div>
                        <h5 className={ styles.bedrooms }>{ propertie.bedrooms + ' ' + (propertie.type).toLowerCase() }</h5>
                        <h6 className={ styles.address }>{ propertie.street + ' ' + propertie.city }</h6>

                    </aside>
                </main>
                <footer className={ styles.footer }>
                    <h5 className={ styles.email }>{propertie.ownerId ?(`${propertie.ownerId.name} ${propertie.ownerId.surname} : ${propertie.ownerId.email}`):null}</h5>
                    <div>         
                    <button className={ styles.button } onClick={handleClick}>Details</button>
                    {/* <button className={ styles.button }>Contact</button> */}
                    </div>
                </footer>
            </div>
        </div>

    )
}
export default CardElement