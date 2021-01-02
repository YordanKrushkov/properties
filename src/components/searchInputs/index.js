import React from 'react';
import styles from './index.module.css'

const SearchOpions = (id,text) => {


    return <option className={styles.inputsEL} id={id} value={text}  required>{text}  </option>

}

export default SearchOpions