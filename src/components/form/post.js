import React, { useState } from 'react'
import styles from './index.module.css'
import AllCities from '../searchInputs/cities'
import Price from '../searchInputs/price'
import inputs from '../searchInputs/type'
import ButtonsField from '../formElements/buttons'

const PostForm = () => {
    const [properties, getData] = useState({
        img: '',
        type: '',
        price: '',
        location: '',
        option: '',
    });
    const [style, changeStyle] = useState(true);
    const [way, changeOption] = useState('RENT');

    const onChangeHandler = (e) => {
        let res = '';

        if (e.target.checked === true) {
            res = e.target.id
        }

        getData({
            [e.target.id]: e.target.value,
            option: res,
        })
        console.log(properties);
    }
    const submitHandler = async (e) => {
        e.preventDefault();


        let promise = await fetch('https://properties-3e020-default-rtdb.firebaseio.com/properties.json', {
            method: 'POST',
            body: JSON.stringify(properties)
        })
        let data = await promise.json();
        this.props.history.push('/');
        return data;

    }
    const openWidget = () => {
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
        if (e.target.textContent == 'SELL') {
            changeStyle(false)
        } else {
            changeStyle(true)
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
                    <div className={styles.typeContainer}>
                        <h2>Where</h2>
                        { AllCities(styles.optionMenu) }
                    </div>
                    <div className={ styles.typeContainer }>
                        <h2>Property Type</h2>
                        { inputs.TypeSelect(styles.optionMenu, 'Choose') }
                    </div>
                    <div className={ styles.typeContainer }>
                        <h2>Bedrooms</h2>
                        { inputs.bedroomCount(styles.optionMenu, 'Choose') }
                    </div>
                </div>
                <div className={ styles.freeDetailsParent }>
                    <div>
                        { ButtonsField(styles.type, 'checkbox', 'details', 'balcony', 'Balcony') }
                        { ButtonsField(styles.type, 'checkbox', 'details', 'garden', 'Garden') }
                        { ButtonsField(styles.type, 'checkbox', 'details', 'swimmingpool', 'Swimmin gpool') }
                        { ButtonsField(styles.type, 'checkbox', 'details', 'transport', 'Easy transport') }
                    </div>
                    <div>
                        { ButtonsField(styles.type, 'checkbox', 'details', 'pets', 'Wellcome Pets') }
                        { ButtonsField(styles.type, 'checkbox', 'details', 'smocking', 'Smoking') }
                        { ButtonsField(styles.type, 'checkbox', 'details', 'garage', 'Garage') }
                        { ButtonsField(styles.type, 'checkbox', 'details', 'parking', 'Free Parking') }
                    </div>

                </div>
                <div className={ styles.description }>
                    <textArea id="description" className={ styles.textArea } />
                </div>
                <div className={styles.priceWrapper}>
                <label className={styles.priceLabel} htmlFor="price">$</label>
                <input className={styles.price} placeholder="Price" type="text" name="price" id="price"/>
                </div>
                
                <div className={styles.buttonsWrapper}>
                <button className={styles.button} onClick={ openWidget }>Upload</button>
                <button className={styles.button}>SUMBIT</button>
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