import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import styles from './index.module.css'
import bed from '../../images/bed.svg'
import bath from '../../images/bath.svg'
import getProperties from '../../services/getData';
const SingleCard = () => {
    const [properties, takeProperties] = useState([]);
    
    const [first, changeFitst] = useState(styles.new);
    const history = useHistory()
    const id = history.location.pathname;
    useEffect(() => {
        getProperties.getSingleProp(takeProperties, id)
    }, [])

    let bedrooms = properties.bedrooms;
    let char = '';
    if (bedrooms) {
        char = bedrooms.charAt(0)
    }
    const style = styles.li

    const handleClick=(e)=>{
        const details=document.getElementById('details');
        const floorplan=document.getElementById('floorplan');
        const map=document.getElementById('map');
        const info=document.getElementById('info');
        if(e.target===details){
         details.classList.add(styles.new)
         details.classList.remove(styles.li)
         document.getElementById('detailsField').style.display='block'

        }else{
         details.classList.add(styles.li)
         details.classList.remove(styles.new)
         document.getElementById('detailsField').style.display='none'
        }
        
        if(e.target===map){
            map.classList.add(styles.new)
            map.classList.remove(styles.li)
            document.getElementById('mapField').style.display='block'
           }else{
            map.classList.add(styles.li)
            map.classList.remove(styles.new)
            document.getElementById('mapField').style.display='none'

           }

           if(e.target===floorplan){
            floorplan.classList.add(styles.new)
            floorplan.classList.remove(styles.li)
            document.getElementById('floorplanField').style.display='block'
           }else{
            floorplan.classList.add(styles.li)
            floorplan.classList.remove(styles.new)
            document.getElementById('floorplanField').style.display='none'

           }
           if(e.target===info){
            info.classList.add(styles.new)
            info.classList.remove(styles.li)
            document.getElementById('infoField').style.display='block'

           }else{
            info.classList.add(styles.li)
            info.classList.remove(styles.new)
            document.getElementById('infoField').style.display='none'

           }
    } 

    console.log(properties.details);
    return (
        <div className={ styles.conteiner }>
            <div className={ styles.propertieInfo }>
                <img className={ styles.images } src={ properties.img } alt="img" />
                <div className={ styles.info }>
                    <header className={ styles.header }>
                        <ul className={ styles.ul } onClick={handleClick}> 
                            <li id='details'  className={style} >Property Details</li>
                            <li id='floorplan' className={style} >Floorplan</li>
                            <li id='map' className={ style } >Map</li>
                            <li id='info' className={ style} >More info</li>
                        </ul>
                    </header>
                    <div className={ styles.infoContainers }>
                        <div id='detailsField' className={ styles.details }>
                            <div className={ styles.iconsParents }>
                                <div className={ styles.icons }>
                                    <img className={ styles.iconsPic } src={ bed } alt="bed" />
                                    <span>{properties.bedrooms}</span>
                                </div>
                                <div className={ styles.icons }>
                                    <img className={ styles.iconsPic } src={ bath } alt="bed" />
                                    <span>1 bathroom</span>
                                </div>
                            </div>
                            <div className="styles infoBody">
                                <h2 className={ styles.h2 }>Details</h2>

                                <ul className={ styles.detailsList }>

                                {properties.details ? (properties.details.map(e=>{
                                    return <li className={ styles.detLi }>{e}</li>})): null}
                                </ul>
                            </div>
                            <div className={ styles.description }>
                                <h2 className={ styles.h2 }>Description</h2>
                                <div className={ styles.descriptionBody }>
                                    <p className={ styles.p }>{properties.description}</p>
                                </div>

                            </div>
                        </div>
                        <div id='floorplanField' className={ styles.floorplan }> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo laudantium suscipit dolorum excepturi voluptates nobis placeat ex itaque nihil soluta?
                        </div>
                        <div id='mapField' className={ styles.map }> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo laudantium suscipit dolorum excepturi voluptates nobis placeat ex itaque nihil soluta?
                        </div>
                        <div id='infoField' className={ styles.moreInfo }> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo laudantium suscipit dolorum excepturi voluptates nobis placeat ex itaque nihil soluta?
                        </div>
                    </div>
                </div>
            </div>
            <aside className={ styles.lender }>
                <header className={ styles.asideHeader }>
                    <h2>{`${properties.bedrooms} ${properties.type}`}</h2>
                    <h5>{`${properties.street} ${properties.city}`}</h5>
                    <h2> $ {properties.price} p.m</h2>
                </header>
                <div className={ styles.propertieCardInfo }>
                    <button className={ styles.button }>Contact</button>
                </div>
            </aside>
        </div>
    )
}
export default SingleCard