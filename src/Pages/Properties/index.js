import React, { useState, useEffect } from 'react'
import getProperties from '../../services/getData'




const Properties = (searcher) => {
    const [properties, takeProperties] = useState([])
    const filter = searcher.location.state
    useEffect(() => {
        getProperties.Searchtem(takeProperties,filter)
    }, [])
    return (
        <div className='container'>

            <h1>H1</h1>
            <div className='cont' >
                { getProperties.renderProperties(properties) }
            </div>
        </div>
    )

}
export default Properties