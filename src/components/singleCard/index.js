import React from 'react';
import styles from './index.module.css'
import img from '../../images/istockphoto-1026205392-612x612.jpg'
import bed from '../../images/bed.svg'
import bath from '../../images/bath.svg'
const SingleCard = () => {



    return (
        <div className={ styles.conteiner }>
            <div className={ styles.propertieInfo }>
                <img className={ styles.images } src={ img } alt="img" />
                <div className={ styles.info }>
                    <header className={ styles.header }>
                        <ul className={ styles.ul }>
                            <li className={ styles.li }><a className={ styles.link }>Property Details</a></li>
                            <li className={ styles.li }><a className={ styles.link }>Floorplan</a></li>
                            <li className={ styles.li }><a className={ styles.link }>Map</a></li>
                            <li className={ styles.li }><a className={ styles.link }>More info</a></li>
                        </ul>
                    </header>
                    <div className={ styles.infoContainers }>
                        <div className={ styles.details }>
                            <div className={ styles.iconsParents }>
                                <div className={ styles.icons }>
                                    <img className={ styles.iconsPic } src={ bed } alt="bed" />
                                    <span>1 bedroom</span>
                                </div>
                                <div className={ styles.icons }>
                                    <img className={ styles.iconsPic } src={ bath } alt="bed" />
                                    <span>1 bathroom</span>
                                </div>
                            </div>
                            <div className="styles infoBody">
                                <h2 className={styles.h2}>Details</h2>

                                <ul className={styles.detailsList}>
                                    <li>Lorem ipsum dolor sit amet.</li>
                                    <li>Lorem ipsum dolor sit amet.</li>
                                    <li>Lorem ipsum dolor sit amet.</li>
                                    <li>Lorem ipsum dolor sit amet.</li>
                                    <li>Lorem ipsum dolor sit amet.</li>
                                    <li>Lorem ipsum dolor sit amet.</li>
                                </ul>
                            </div>
                            <div className={styles.description}>
                                <h2 className={styles.h2}>Description</h2>
                                <div className={styles.descriptionBody}>
                                <p >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil illum magni similique, est repellat in iure fugiat dignissimos accusamus possimus.</p>
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
                    <h1>Property</h1>
                </header>
            </aside>
        </div>
    )
}
export default SingleCard