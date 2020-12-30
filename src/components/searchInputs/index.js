import React from 'react';
import styles from './index.module.css'

const SearchOpions = (id,value,text) => {


    return <option id={id} value={value} >{text}</option>

}

export default SearchOpions