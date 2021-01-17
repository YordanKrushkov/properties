import React, {useState, useEffect } from 'react';
import styles from './index.module.css';
import getProperties from '../../services/getData'
import Filter from '../../components/filterBar/filter'


const Sell = () => {
    const [properties, takeProperties] = useState([]);
    const [filter, getFilter]=useState({
        city: '',
        type: '',
        bedrooms: '',
        minPrice:'',
        maxPrice:''
    })
    useEffect(() => {
        getProperties.getSome(takeProperties ,'SALE', filter)
    }, [])

    const ChangeHandler=(e)=>{
        getFilter({
            ...filter,
            [e.target.id]:e.target.value
        })
    }
    useEffect(() => {
        getProperties.getSome(takeProperties ,'SALE', filter)
    }, [filter])

    return (
        <div className={ styles.containerWrapper }>
            {Filter(ChangeHandler, 'SALE')}
            <div className={ styles.container }>
            

                <div className={ styles.wrapper } >
                    { getProperties.renderProperties(properties) }
                </div>
                <aside className={ styles.aside }>
                <div className={ styles.assideWrapper }></div>
            </aside>
            </div>
         

        </div>

    )
}

export default Sell