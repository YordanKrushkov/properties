import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import styles from './index.module.css'
import AllCities from '../../components/searchInputs/cities'
import elements from '../../components/formElements/inputs'
import inputs from '../../components/searchInputs/type'
import UserContext from '../../Context'
import getCookie from '../../services/cookies'
const PostForm = () => {
    const context = useContext(UserContext)
    const [initialState, getState] = useState([])
    const [properties, getData] = useState({
        img: '',
        type: '',
        price: '',
        city: '',
        street: '',
        bedrooms: '',
        bathroom: '',
        construction: '',
        floorbuilding: '',
        floormax: '',
        furnished: '',
        heating: '',
        area: '',
        sellOrRent: 'RENT',
        details: initialState,
        description: '',
        floorplan: '',
        ownerId:'',
    });
    const [style, changeStyle] = useState(true);
    const history = useHistory()

    const onChangeHandler = (e) => {
        getData({
            ...properties,
            [e.target.id]: e.target.value,
            email: context.email
        });
    };
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

    };
    const submitHandler = async (e) => {
        e.preventDefault();
        getData({
            ...properties,
            details: initialState,
        })
        console.log('before fetch:', properties);
        let promise = await fetch('http://localhost:4000/properties/create', {
            method: 'POST',
            body: JSON.stringify(properties),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': getCookie('x-auth-token')
            },
        })
        console.log('promise',promise);
        history.push('/');

    };
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
    };

    const openWidgetFloorPlan = (e) => {
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
                    floorplan: result.info.url
                })
            }

        })
        widget.open()
    };
    const clickHendler = (e) => {
        if (e.target.textContent === 'SALE') {
            changeStyle(false)
            getData({
                ...properties,
                sellOrRent: 'SALE'
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
                    <li onClick={ clickHendler } value='SALE' className={ style ? styles.sellOrRent : styles.new }>SALE</li>
                </ul>
            </header>
            <h2 className={ styles.title }>List your property</h2>
            <form className={ styles.form } action="" onSubmit={ submitHandler }>

                <div className={ styles.propertieOptions }>
                    <div className={ styles.optionSection }>
                        <div className={ styles.typeContainer }>
                            <h2 className={ styles.h2Label }>Where</h2>
                            { AllCities(styles.optionMenu, onChangeHandler) }
                        </div>
                        <div className={ styles.typeContainer }>
                            <h2 className={ styles.h2Label }>Property Type</h2>
                            { inputs.TypeSelect(styles.optionMenu, onChangeHandler) }
                        </div>
                        <div className={ styles.typeContainer }>
                            <h2 className={ styles.h2Label }>Construction</h2>
                            { inputs.construction(styles.optionMenu, onChangeHandler) }
                        </div>

                    </div>

                    <div className={ styles.optionSection }>
                        <div className={ styles.typeContainer }>
                            <h2 className={ styles.h2Label }>Bedrooms</h2>
                            { inputs.bedroomCount(styles.optionMenu, onChangeHandler) }
                        </div>
                        <div className={ styles.typeContainer }>
                            <h2 className={ styles.h2Label }>Bathrooms</h2>
                            { inputs.bathroomCount(styles.optionMenu, onChangeHandler) }
                        </div>

                        <div className={ styles.typeContainer }>
                            <h2 className={ styles.h2Label }>Furniture</h2>
                            { inputs.furniture(styles.optionMenu, onChangeHandler) }
                        </div>
                    </div>
                    <div className={ styles.optionSection }>
                        <div className={ styles.typeContainer }>
                            <h2 className={ styles.h2Label }>Floor</h2>
                            { inputs.floor(styles.optionMenu, 'building', onChangeHandler) }
                        </div>
                        <div className={ styles.typeContainer }>
                            <h2 className={ styles.h2Label }>Total floors</h2>
                            { inputs.floor(styles.optionMenu, 'max', onChangeHandler) }
                        </div>
                        <div className={ styles.typeContainer }>
                            <h2 className={ styles.h2Label }>Heating</h2>
                            { inputs.heating(styles.optionMenu, onChangeHandler) }
                        </div>
                    </div>

                </div>
                <div className={ styles.details }>
                    <div className={ styles.street }>
                        <label className={ styles.streetLabel } htmlFor="street">Street</label>
                        <input className={ styles.streetInput } onChange={ onChangeHandler } placeholder="e.g. Oxford Str." type="text" name='street' id="street" />
                    </div>
                    { elements.InputElements('price', 'text', 'e.g. 1500', 'Price', onChangeHandler, 'req') }
                    { elements.InputElements('area', 'text', 'e.g. 74 sq m', 'Area', onChangeHandler) }
                </div>

                <div className={ styles.freeDetailsParent }>
                    <div>
                        { elements.ButtonsField(styles.type, 'checkbox', 'details', 'Balcony', 'Balcony', detailHendler) }
                        { elements.ButtonsField(styles.type, 'checkbox', 'details', 'Garden', 'Garden', detailHendler) }
                        { elements.ButtonsField(styles.type, 'checkbox', 'details', 'Swimming pool', 'Swimming pool', detailHendler) }
                        { elements.ButtonsField(styles.type, 'checkbox', 'details', 'Easy transport', 'Easy transport', detailHendler) }
                        { elements.ButtonsField(styles.type, 'checkbox', 'details', 'Lift', 'Lift', detailHendler) }
                    </div>
                    <div>
                        { elements.ButtonsField(styles.type, 'checkbox', 'details', 'Wellcome Pets', 'Wellcome Pets', detailHendler) }
                        { elements.ButtonsField(styles.type, 'checkbox', 'details', 'Smoking', 'Smoking', detailHendler) }
                        { elements.ButtonsField(styles.type, 'checkbox', 'details', 'Garage', 'Garage', detailHendler) }
                        { elements.ButtonsField(styles.type, 'checkbox', 'details', 'Free Parking', 'Free Parking', detailHendler) }
                        { elements.ButtonsField(styles.type, 'checkbox', 'details', 'Video Security', 'Video Security', detailHendler) }
                    </div>
                </div>
                <div className={ styles.buttonsWrapper }>
                    <button className={ styles.button } onClick={ openWidget } required>Upload Image</button>
                    <button className={ styles.button } onClick={ openWidgetFloorPlan }>Upload Floor Plan</button>

                </div>

                <div className={ styles.description }>
                    <textarea id="description" placeholder='Please, write some description here...' className={ styles.textArea } onChange={ onChangeHandler } />
                </div>


                <button className={ styles.button }>SUMBIT</button>
            </form>
        </div>
    )




}

export default PostForm;

// {/* {ButtonsField(styles.type,'radio','type','flat', 'Flat','req')}
//                 {ButtonsField(styles.type,'radio','type','house', 'House')}
//                 {ButtonsField(styles.type,'radio','type','cottage', 'Cottage')}
//                 {ButtonsField(styles.type,'radio','type','land', 'Land')} */}

// {/* {ButtonsField(styles.type,'radio','bedroom','studio', 'Studio','req')}
//                 {ButtonsField(styles.type,'radio','bedroom','one', '1 bedroom')}
//                 {ButtonsField(styles.type,'radio','bedroom','two', '2 bedroom')}
//                 {ButtonsField(styles.type,'radio','bedroom','three', '3 bedroom')}
//                 {ButtonsField(styles.type,'radio','bedroom','four', '4 bedroom +')} */}