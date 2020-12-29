import React, { Component } from 'react'
import styles from './index.module.css'
import CardElement from "../cards/card-elemtent";
import UserContext from '../../Context';

class Rent extends Component {
   
    state = {
        properties: []
    }
    static contextType=UserContext;
    getData = async () => {
        const promise = await fetch('https://properties-3e020-default-rtdb.firebaseio.com/properties.json');
        const properties = await promise.json();
        this.setState({
            properties
        })

    }

    renderProperties() {
        let { properties } = this.state
        return Object.keys(properties).map((propertie) => {
            if (properties[propertie].hasOwnProperty('rent')) {
                let item = properties[propertie]
                let key = propertie;

                return  CardElement(item, key)
                
            }
        })
    }

    componentDidMount() {
        this.getData();
    }

    render() {
        return (
            <div className={styles.wrapper} >
                {this.renderProperties() }
            </div>

        )
    }
}

export default Rent