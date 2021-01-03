import React from 'react'
import SearchOpions from './index'

export default {

    TypeSelect(className, f) {

        return (
            <select name="type" id="type" className={ className }  onChange={f} required>
                <option value="0">Select...</option>
                { SearchOpions('type',  'Flat', null) }
                { SearchOpions('type', 'House', null) }
                { SearchOpions('type', 'Cottage', null) }
                { SearchOpions('type', 'Land', null) }
            </select>
        )
    },

    bedroomCount(className,f) {
        return (
            <select name="type" id="bedrooms" className={ className }  onChange={f} required>
                <option value="0">Select...</option>
                { SearchOpions('bedrooms', 'studio', 'Studio', null) }
                { SearchOpions('bedrooms', '1 bedroom', null) }
                { SearchOpions('bedrooms', '2 bedroom', null) }
                { SearchOpions('bedrooms', '3 bedroom',null ) }
                { SearchOpions('bedrooms', '4 bedroom',null ) }
            </select>
        )

    },
    bathroomCount(className,f) {
        return (
            <select name="type" id="bathroom" className={ className }  onChange={f} required>
                <option value="0">Select...</option>
                { SearchOpions('bathroom', '1 bathroom', null) }
                { SearchOpions('bathroom', '2 bathroom', null) }
                { SearchOpions('bathroom', '3 bathroom',null ) }
                { SearchOpions('bathroom', '4 bathroom',null ) }
            </select>
        )

    },
    construction(className, f) {
        return (
            <select name="construction" id="construction" className={ className } required onChange={f}>
                <option value="0">Select...</option>
                { SearchOpions('construction',  'New',null) }
                { SearchOpions('construction', 'Old',null) }
                { SearchOpions('construction', 'Brick',null) }
                { SearchOpions('construction', 'Panel',null) }
            </select>
        )

    },
    floor(className,op,f) {
        return (
            <select name="floor" id={"floor"+op} className={ className } required onChange={f}>
                <option value="0">Select...</option>
                { SearchOpions('floor',  '1',null) }
                { SearchOpions('floor', '2',null) }
                { SearchOpions('floor',  '3',null) }
                { SearchOpions('floor',  '4',null) }
            </select>
        )
    },
    furniture(className,f) {
        return (
            <select name="furnished" id="furnished" className={ className } required onChange={f}>
                <option value="0">Select...</option>
                { SearchOpions('furnished', 'Furnished',null) }
                { SearchOpions('furnished',  'Part-furnished',null) }
                { SearchOpions('furnished', 'Not furnished',null) }
            </select>
        )
    },
    heating(className, f) {
        return (
            <select name="heating" id="heating" className={ className } required onChange={f}>
                <option value="0">Select...</option>
                { SearchOpions('heating', 'Gas', null) }
                { SearchOpions('heating', 'Electricity', null) }
                { SearchOpions('heating','Local', null) }
            </select>
        )
    },
}