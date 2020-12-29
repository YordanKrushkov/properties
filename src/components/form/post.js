import React, { Component } from 'react'
import styles from './index.module.css'



class PostForm extends Component {

    state = {
        img: '',
        type: '',
        price: '',
        location: '',
        option: ''
    }

    onChangeHandler = (e) => {
        let res='';

        if (e.target.checked === true) {
           res = e.target.id
        }

        this.setState({
            [e.target.id]: e.target.value,
            option: res,
        })
        console.log(this.state);
    }
    submitHandler = async (e) => {
        e.preventDefault();


        let promise = await fetch('https://properties-3e020-default-rtdb.firebaseio.com/properties.json', {
            method: 'POST',
            body: JSON.stringify(this.state)
        })
        let data = await promise.json();
        this.props.history.push('/');
        return data;

    }

    render() {
        return (
            <div className={ styles.formContainer }>
                <form action="" onSubmit={ this.submitHandler }>
                    <h2>List your property</h2>

                    <label htmlFor="type">Image</label>
                    <input type="text" name="type" id="img" onChange={ this.onChangeHandler } />
                    <label htmlFor="type">Property type</label>
                    <input type="text" name="type" id="type" onChange={ this.onChangeHandler } />
                    <label htmlFor="price">Price</label>
                    <input type="text" name="price" id="price" onChange={ this.onChangeHandler } />
                    <label htmlFor="type">Where</label>
                    <input type="text" name="location" id="location" onChange={ this.onChangeHandler } />
                    <div className={ styles.option }>
                        <label htmlFor="rent">Rent</label>
                        <input type="radio" name="option" id="rent" required="required" onChange={ this.onChangeHandler } />
                        <label htmlFor="sell">Sell</label>
                        <input type="radio" name="option" id="sell"  onChange={ this.onChangeHandler } />
                    </div>
                    <button>SUMBIT</button>
                </form>
            </div>
        )
    }

}

export default PostForm;