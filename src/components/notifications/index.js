import React from 'react';
import styles from './index.module.css'



const notification= (messege)=>{

    return(
        <div className={styles.container} id='notification'>
            <h2 className={styles.message}>{messege}</h2>
        </div>
    )
}

export default notification