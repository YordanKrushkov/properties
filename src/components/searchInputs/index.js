import React from 'react';
import styles from './index.module.css'

const SearchOpions = (id,text,placeholder,f,) => {


    return <option id={id} value={text} placeholder={placeholder} required>{text}  </option>

}

export default SearchOpions