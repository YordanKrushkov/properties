import React from 'react'
import SearchOpions from './index'

export default {

    TypeSelect(className, f) {

        return (
            <select name="type" id="type" className={ className }  onChange={f} required>
                <option value="">Choose</option>
                { SearchOpions('type',  'Flat') }
                { SearchOpions('type', 'Houses') }
                { SearchOpions('type', 'Cottage') }
                { SearchOpions('type', 'Land') }
            </select>
        )
    },

    bedroomCount(className,f) {
        return (
            <select name="type" id="bedrooms" className={ className }  onChange={f} required>
                <option value="">Choose</option>
                { SearchOpions('bedrooms', 'studio', 'Studio') }
                { SearchOpions('bedrooms', '1 bedroom', ) }
                { SearchOpions('bedrooms', '2 bedroom', ) }
                { SearchOpions('bedrooms', '3 bedroom', ) }
                { SearchOpions('bedrooms', '4 bedroom', ) }
            </select>
        )

    },
    construction(className, f) {
        return (
            <select name="construction" id="construction" className={ className } required onChange={f}>
                <option value="">Choose</option>
                { SearchOpions('construction',  'New') }
                { SearchOpions('construction', 'Old') }
                { SearchOpions('construction', 'Brick') }
                { SearchOpions('construction', 'Panel') }
            </select>
        )

    },
    floor(className,op,f) {
        return (
            <select name="floor" id={"floor"+op} className={ className } required onChange={f}>
                <option value="">Choose</option>
                { SearchOpions('floor',  '1') }
                { SearchOpions('floor', '2') }
                { SearchOpions('floor',  '3') }
                { SearchOpions('floor',  '4') }
            </select>
        )
    },
    furniture(className,f) {
        return (
            <select name="furnished" id="furnished" className={ className } required onChange={f}>
                <option value="">Choose</option>
                { SearchOpions('furnished', 'Furnished') }
                { SearchOpions('furnished',  'Part-furnished') }
                { SearchOpions('furnished', 'Not furnished') }
            </select>
        )
    },
    heating(className, f) {
        return (
            <select name="heating" id="heating" value='' className={ className } required onChange={f}>
                <option value="">Choose</option>
                { SearchOpions('heating', 'Gas') }
                { SearchOpions('heating', 'Electricity') }
                { SearchOpions('heating','Local') }
            </select>
        )
    },
}