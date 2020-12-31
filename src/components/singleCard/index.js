import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import styles from './index.module.css'
import img from '../../images/istockphoto-1026205392-612x612.jpg'
import bed from '../../images/bed.svg'
import bath from '../../images/bath.svg'
import getProperties from '../../services/getData';
const SingleCard = () => {
    const [properties, takeProperties] = useState([])
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

    return (
        <div className={ styles.conteiner }>
            <div className={ styles.propertieInfo }>
                <img className={ styles.images } src={ img } alt="img" />
                <div className={ styles.info }>
                    <header className={ styles.header }>
                        <ul className={ styles.ul }>
                            <li className={ styles.li }><a href="/details" className={ styles.link }>Property Details</a></li>
                            <li className={ styles.li }><a href="/floorplan" className={ styles.link }>Floorplan</a></li>
                            <li className={ styles.li }><a href="/map" className={ styles.link }>Map</a></li>
                            <li className={ styles.li }><a href="/moreinfo" className={ styles.link }>More info</a></li>
                        </ul>
                    </header>
                    <div className={ styles.infoContainers }>
                        <div className={ styles.details }>
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
                                    <li className={ styles.detLi }>Lorem ipsum dolor sit amet.</li>
                                    <li className={ styles.detLi }>Lorem ipsum dolor sit amet.</li>
                                    <li className={ styles.detLi }>Lorem ipsum dolor sit amet.</li>
                                    <li className={ styles.detLi }>Lorem ipsum dolor sit amet.</li>
                                    <li className={ styles.detLi }>Lorem ipsum dolor sit amet.</li>
                                    <li className={ styles.detLi }>Lorem ipsum dolor sit amet.</li>
                                </ul>
                            </div>
                            <div className={ styles.description }>
                                <h2 className={ styles.h2 }>Description</h2>
                                <div className={ styles.descriptionBody }>
                                    <p className={ styles.p }>{properties.description}</p>
                                </div>

                            </div>
                        </div>
                        <div className={ styles.floorplan }> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo laudantium suscipit dolorum excepturi voluptates nobis placeat ex itaque nihil soluta?
                        </div>
                        <div className={ styles.map }> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo laudantium suscipit dolorum excepturi voluptates nobis placeat ex itaque nihil soluta?
                        </div>
                        <div className={ styles.moreInfo }> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo laudantium suscipit dolorum excepturi voluptates nobis placeat ex itaque nihil soluta?
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