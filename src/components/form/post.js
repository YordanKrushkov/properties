import React, {useState } from 'react'
import styles from './index.module.css'



const PostForm = () => {
    const [properties, getData] = useState({
        img: '',
        type: '',
        price: '',
        location: '',
        option: '',
    });


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

    return (
        <div className={ styles.formContainer }>
            <form action="" onSubmit={ submitHandler }>
                <h2>List your property</h2>

                <label htmlFor="type">Image</label>
                <input type="text" name="type" id="img" onChange={ onChangeHandler } />
                <label htmlFor="type">Property type</label>
                <input type="text" name="type" id="type" onChange={ onChangeHandler } />
                <label htmlFor="price">Price</label>
                <input type="text" name="price" id="price" onChange={ onChangeHandler } />
                <label htmlFor="type">Where</label>
                <input type="text" name="location" id="location" onChange={ onChangeHandler } />
                <div className={ styles.option }>
                    <label htmlFor="rent">Rent</label>
                    <input type="radio" name="option" id="rent" required="required" onChange={ onChangeHandler } />
                    <label htmlFor="sell">Sell</label>
                    <input type="radio" name="option" id="sell" onChange={ onChangeHandler } />
                </div>
                <button>SUMBIT</button>
            </form>
        </div>
    )


}

export default PostForm;