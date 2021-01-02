import React,{useState, useContext} from 'react'
import {useHistory} from 'react-router-dom'
import UserContext from '../../Context'
import styles from './index.module.css'
import img from '../../images/user-solid.svg'
const Edit = () => {
    const [properties, getData] = useState({
        profilePicture:'',
        firstName:'',
        lastName:'',
        phone:'',
        location:'',
    })
    const context=useContext(UserContext)
    const history=useHistory()
    const onChangeHandler = (e) => {

        getData({
            ...properties,
            [e.target.id]: e.target.value,
            email:context.email
        });
    };

    const submitHandler = async (e) => {
        e.preventDefault();

        let promise = await fetch('https://properties-3e020-default-rtdb.firebaseio.com/users.json', {
            method: 'POST',
            body: JSON.stringify(properties)
        })
        let data = await promise.json();
        history.push('/');
        return data;

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
                    profilePicture: result.info.url
                })
            }
        })
        widget.open()
    };


    return (
        <form className={ styles.container } onSubmit={submitHandler}>
        <h1 className={ styles.title } >Upload your picture</h1>
         <img src={img} alt="ProfilePicture" className={ styles.img } onClick={ openWidget } />
            <div className={ styles.inputContainer }>
                <label className={ styles.inputLabel } htmlFor='firstName'>First Name</label>
                <input className={ styles.input } placeholder='John' type='text' id='firstName' onChange={onChangeHandler} />
            </div>
            <div className={ styles.inputContainer }>
                <label className={ styles.inputLabel } htmlFor='lastName'>Second Name</label>
                <input className={ styles.input } placeholder='John' type='text' id='lastName' onChange={onChangeHandler} />
            </div>
            <div className={ styles.inputContainer }>
            <label className={ styles.inputLabel } htmlFor='phone'>Phone</label>
            <input className={ styles.input } placeholder='0799999999' type='text' id='phone' onChange={onChangeHandler} />
            </div>
            <div className={ styles.inputContainer }>
            <label className={ styles.inputLabel } htmlFor='location'>Location</label>
            <input className={ styles.input } placeholder='London, UK' type='text' id='location' onChange={onChangeHandler} />
            </div>
            <button className={ styles.button }> Submit</button>
        </form>
    )
}
export default Edit