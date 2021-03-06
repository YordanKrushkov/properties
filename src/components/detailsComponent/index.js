import React from 'react'
import styles from './index.module.css'
import bed from '../../images/bed.svg'
import bath from '../../images/bath.svg'

const DetailsContainer = (properties) => {
 let count=0;

    return (
        <div className={ styles.infoContainers }>
            <div id='detailsField' className={ styles.details }>
                <div className={ styles.iconsParents }>
                    <div className={ styles.icons }>
                        <img className={ styles.iconsPic } src={ bed } alt="bedrooms " />
                        <span className={ styles.span }>{ properties.bedrooms }</span>
                    </div>
                    <div className={ styles.icons }>
                        <img className={ styles.iconsPic } src={ bath } alt="bathrooms" />
                        <span className={ styles.span }>{properties.bathroom}</span>
                    </div>
                </div>
                <div className={ styles.infoBody }>
                    <h2 className={ styles.h2 }>Details</h2>
                    <ul className={ styles.detailsList }>
                        <li className={ styles.detLi }>Size: { properties.area } sq.m</li>
                        <li className={ styles.detLi }>Heating: { properties.heating }</li>
                        <li className={ styles.detLi }>{ properties.furnished }</li>
                        <li className={ styles.detLi }>Construction: { properties.construction }</li>
                        <li className={ styles.detLi }>Floor: { properties.floormax }</li>
                    </ul>
                </div>
                
                <div className={ styles.infoBody }>
                    <div className={ styles.titleWrapper }>
                        <h2 className={ styles.h2 }>More Details</h2>

                    </div>
                    <ul className={ styles.moreDetailsList }>
                        { properties.details ? (properties.details.map(e => {
                            return <li key={count++} className={ styles.detLi }>{ e }</li>
                        })) : null }
                    </ul>
                </div>
                <div className={ styles.description }>
                    <h2 className={ styles.h2Description }>Description</h2>
                    <div className={ styles.descriptionBody }>
                        <p className={ styles.p }>{ properties.description }</p>
                    </div>

                
            </div>
            </div>
            <div id='floorplanField' className={ styles.floorplan }>
            {properties.floorplan ? <img src={properties.floorplan} alt='floorplan'/>: null}
            </div>
            <div id='mapField' className={ styles.map }>
            
            </div>
          
        </div>
    )

}
export default DetailsContainer