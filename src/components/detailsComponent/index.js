import React from 'react'
import styles from './index.module.css'
import bed from '../../images/bed.svg'
import bath from '../../images/bath.svg'

const DetailsContainer=(properties)=>{

    let bedrooms = properties.bedrooms;
    let char = '';
    if (bedrooms) {
        char = bedrooms.charAt(0)
    }

return(
    <div className={ styles.infoContainers }>
                        <div id='detailsField' className={ styles.details }>
                            <div className={ styles.iconsParents }>
                                <div className={ styles.icons }>
                                    <img className={ styles.iconsPic } src={ bed } alt="bed" />
                                    <span>{ properties.bedrooms }</span>
                                </div>
                                <div className={ styles.icons }>
                                    <img className={ styles.iconsPic } src={ bath } alt="bed" />
                                    <span>1 bathroom</span>
                                </div>
                            </div>
                            <div className={styles.infoBody}>
                                <h2 className={ styles.h2 }>Details</h2>

                                <ul className={ styles.detailsList }>

                                    { properties.details ? (properties.details.map(e => {
                                        return <li className={ styles.detLi }>{ e }</li>
                                    })) : null }
                                </ul>
                            </div>
                            <div className={ styles.description }>
                                <h2 className={ styles.h2 }>Description</h2>
                                <div className={ styles.descriptionBody }>
                                    <p className={ styles.p }>{ properties.description }</p>
                                </div>

                            </div>
                        </div>
                        <div id='floorplanField' className={ styles.floorplan }>
                        </div>
                        <div id='mapField' className={ styles.map }> 
                        </div>
                        <div id='infoField' className={ styles.moreInfo }>
                        </div>
                    </div>
)

}
export default DetailsContainer