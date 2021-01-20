import React from 'react';
import styles from './index.module.css'

const SortInput = (f) => {


    return (
    <select name="sortBy" id="sortBy" className={styles.sortSelector} onChange={ f }>
     <option className={styles.neButton} id="sortBy" value="newest" > Newest</option>
    <option className={styles.neButton} id="sortBy" value='lowerPrice' >Price: Low-High</option>
     <option className={styles.neButton} id="sortBy" value='higherPrice' >Price: High-Low</option>
    </select>
    )
}

export default SortInput