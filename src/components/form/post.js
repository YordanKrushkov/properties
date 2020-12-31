import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import styles from './index.module.css'
import AllCities from '../searchInputs/cities'
import elements from '../formElements/inputs'
import inputs from '../searchInputs/type'
const PostForm = () => {
    const [properties, getData] = useState({
        img: '',
        type: '',
        price: '',
        city: '',
        street: '',
        option: '',
        bedrooms: '',
        construction: '',
        furniture: '',
        floorbulding: '',
        floormax: '',
        furnished: '',
        heating: '',
        size: '',
        year: '',
        sellOrRent: 'RENT',
        details:{},
        description: '',
    });
    const [style, changeStyle] = useState(true);
const initialState = []

    const history = useHistory()
    const [way, changeOption] = useState('RENT');
    const onChangeHandler = (e) => {
        let res = '';

        if (e.target.checked === true) {
            res = e.target.id
        }

        getData({
            ...properties,
            [e.target.id]: e.target.value
        })
        console.log(properties);
        // console.log(properties);
    }

    const detailHendler = (e) => {
  

        if (e.target.checked) {
            initialState.push(e.target.name)
        }
        if (!e.target.checked) {
            let el = initialState.find(el => (el === e.target.name))
            let index = initialState.indexOf(el)
            initialState.splice(index, 1)
        }
        console.log(initialState);
    }
    const submitHandler = async (e) => {
        e.preventDefault();
        getData({
            ...properties,
            details: Object.assign(properties.details, initialState)
        })
        console.log(properties);
        let promise = await fetch('https://properties-3e020-default-rtdb.firebaseio.com/properties.json', {
            method: 'POST',
            body: JSON.stringify(properties)
        })
        let data = await promise.json();
        history.push('/');
        return data;

    }
    const openWidget = (e) => {
        e.preventDefault()
        const widget = window.cloudinary.createUploadWidget({
            cloudName: "zltgrd",
            uploadPreset: "properties"
        }, (error, result) => {
            console.log("Error", error);
            console.log('Succes', result);
            if (result.event === 'success') {
                getData({
                    ...properties,
                    img: result.info.url
                })
            }

        })
        widget.open()
    }


    const clickHendler = (e) => {
        changeOption(e.target.textContent)
        if (e.target.textContent === 'SELL') {
            changeStyle(false)
            changeOption('SELL')
            getData({
                ...properties,
                sellOrRent: 'SELL'
            })
        } else {
            changeStyle(true);
            getData({
                ...properties,
                sellOrRent: 'RENT'
            })
        }

    };


    return (
        <div className={ styles.formContainer }>
            <header className={ styles.header }>
                <ul className={ styles.headerContainer }>
                    <li onClick={ clickHendler } value='RENT' className={ style ? styles.new : styles.sellOrRent }>RENT</li>
                    <li onClick={ clickHendler } value='SELL' className={ style ? styles.sellOrRent : styles.new }>SELL</li>
                </ul>
            </header>
            <h2 className={ styles.title }>List your property</h2>
            <form className={ styles.form } action="" onSubmit={ submitHandler }>

                <div className={ styles.propertieOptions }>
                    <div className={ styles.optionSection }>
                        <div className={ styles.typeContainer }>
                            <h2>Property Type</h2>
                            { inputs.TypeSelect(styles.optionMenu, onChangeHandler) }
                        </div>
                        <div className={ styles.typeContainer }>
                            <h2>Where</h2>
                            { AllCities(styles.optionMenu, onChangeHandler) }
                        </div>
                        <div className={ styles.typeContainer }>
                            <div className={ styles.street }>
                                <label className={ styles.streetLabel } htmlFor="street">Street</label>
                                <input className={ styles.streetInput } onChange={ onChangeHandler } placeholder="Street" type="text" name='street' id="street" />
                            </div>
                        </div>
                    </div>

                    <div className={ styles.optionSection }>
                        <div className={ styles.typeContainer }>
                            <h2>Bedrooms</h2>
                            { inputs.bedroomCount(styles.optionMenu,  onChangeHandler) }
                        </div>
                        <div className={ styles.typeContainer }>
                            <h2>Construction</h2>
                            { inputs.construction(styles.optionMenu,  onChangeHandler) }
                        </div>
                        <div className={ styles.typeContainer }>
                            <h2>Furniture</h2>
                            { inputs.furniture(styles.optionMenu,  onChangeHandler) }
                        </div>
                    </div>
                    <div className={ styles.optionSection }>
                        <div className={ styles.typeContainer }>
                            <h2>Floor</h2>
                            { inputs.floor(styles.optionMenu, 'building',  onChangeHandler) }
                        </div>
                        <div className={ styles.typeContainer }>
                            <h2>How many floors</h2>
                            { inputs.floor(styles.optionMenu, 'max',  onChangeHandler) }
                        </div>
                        <div className={ styles.typeContainer }>
                            <h2>Heating</h2>
                            { inputs.heating(styles.optionMenu,  onChangeHandler) }
                        </div>
                    </div>

                </div>
                <div className={ styles.details }>
                    { elements.InputElements('price', 'text', '$', '', onChangeHandler, 'req') }
                    { elements.InputElements('size', 'text', 'sq.m', '', onChangeHandler) }
                    { elements.InputElements('year', 'text', 'year', '', onChangeHandler) }
                </div>
                <div className={ styles.freeDetailsParent }>
                    <div>
                        { elements.ButtonsField(styles.type, 'checkbox', 'details', 'balcony', 'Balcony', detailHendler) }
                        { elements.ButtonsField(styles.type, 'checkbox', 'details', 'garden', 'Garden', detailHendler) }
                        { elements.ButtonsField(styles.type, 'checkbox', 'details', 'swimmingpool', 'Swimmin gpool', detailHendler) }
                        { elements.ButtonsField(styles.type, 'checkbox', 'details', 'transport', 'Easy transport', detailHendler) }
                        { elements.ButtonsField(styles.type, 'checkbox', 'details', 'lift', 'Lift', detailHendler) }
                    </div>
                    <div>
                        { elements.ButtonsField(styles.type, 'checkbox', 'details', 'pets', 'Wellcome Pets', detailHendler) }
                        { elements.ButtonsField(styles.type, 'checkbox', 'details', 'smocking', 'Smoking', detailHendler) }
                        { elements.ButtonsField(styles.type, 'checkbox', 'details', 'garage', 'Garage', detailHendler) }
                        { elements.ButtonsField(styles.type, 'checkbox', 'details', 'parking', 'Free Parking', detailHendler) }
                        { elements.ButtonsField(styles.type, 'checkbox', 'details', 'security', 'Video Security', detailHendler) }
                    </div>

                </div>
                <div className={ styles.description }>
                    <textArea id="description" value='' placeholder='Please, write some description here...' className={ styles.textArea } onChange={onChangeHandler} />
                </div>

                <div className={ styles.buttonsWrapper }>
                    <button className={ styles.button } onClick={ openWidget }>Upload</button>
                    <button className={ styles.button }>SUMBIT</button>
                </div>
            </form>
        </div>
    )




}

export default PostForm;

{/* {ButtonsField(styles.type,'radio','type','flat', 'Flat','req')}
                {ButtonsField(styles.type,'radio','type','house', 'House')}
                {ButtonsField(styles.type,'radio','type','cottage', 'Cottage')}
                {ButtonsField(styles.type,'radio','type','land', 'Land')} */}

{/* {ButtonsField(styles.type,'radio','bedroom','studio', 'Studio','req')}
                {ButtonsField(styles.type,'radio','bedroom','one', '1 bedroom')}
                {ButtonsField(styles.type,'radio','bedroom','two', '2 bedroom')}
                {ButtonsField(styles.type,'radio','bedroom','three', '3 bedroom')}
                {ButtonsField(styles.type,'radio','bedroom','four', '4 bedroom +')} */}