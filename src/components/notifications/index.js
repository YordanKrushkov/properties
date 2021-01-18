import React from 'react';
import styles from './index.module.css'



const Notification=(message)=>{


    return(
        <div className={styles.container}>
            <h2 className="message">{message}</h2>
        </div>
    )
}

export default Notification