import React from 'react'
import SearchOpions from './index'

export default {

    TypeSelect(className) {

        return (
            <select name="type" id="type" className={ className }>
                { SearchOpions('type', '0', 'Show All') }
                { SearchOpions('type', 'flat', 'Flat') }
                { SearchOpions('type', 'house', 'Houses') }
                { SearchOpions('type', 'cottage', 'Cottage') }
                { SearchOpions('type', 'land', 'Land') }
            </select>
        )
    },

    bedroomCount(className) {
        return (
            <select name="type" id="type" className={ className }>
                { SearchOpions('type', '0', 'Show All') }
                { SearchOpions('bedrooms', 'studio', 'Studio') }
                { SearchOpions('bedrooms', 'one', '1 bed') }
                { SearchOpions('bedrooms', 'two', '2 bed') }
                { SearchOpions('bedrooms', 'three', '3 bed') }
                { SearchOpions('bedrooms', 'four', '4 bed+') }
            </select>
        )

    }
}