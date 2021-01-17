import React from 'react';
import styles from './index.module.css'

const SortInput = (f) => {


    return (
    <select name="sortBy" id="sortBy" className={styles.sortSelector} onChange={ f }>
    <option className={styles.neButton} id="sortBy" value='lowerPrice' >Lower price</option>
     <option className={styles.neButton} id="sortBy" value='higherPrice' >Higher price</option>
     <option className={styles.neButton} id="sortBy" value="newest" > Date of post</option>
    </select>
    )
}

export default SortInput