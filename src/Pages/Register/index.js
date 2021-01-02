import React, { useState } from 'react';
import styles from './index.module.css'
import { Link, useHistory } from 'react-router-dom'
const apiKey = 'AIzaSyBFr1QW_fF9sluMRPfYk6UzMgoOAxlFC0I'
const url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`
const Register = () => {

    const [user, getUser] = useState({
        email: '',
        password: '',
        repassword: '',
    })
    const history = useHistory();
    const chnageHendler = (e) => {
        getUser({
            ...user,
            [e.target.id]: e.target.value
        });
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const { email, password, repassword } = user
        if (password.length < 6 || password !== repassword) {
            return;
        }
        fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        }).then(res => res.json())
            .then(data => {
                history.push('/login')
                return data
            })
            .catch((e) => {
                console.log(e);
            })

    }
    return (
        <div className={ styles.container }>
            <h1 className={ styles.name }>Register</h1>
            <p>Sign in to save your favourite properties, searches, house prices and more.</p>
            <form action="" className={ styles.formBody } onSubmit={ submitHandler }>
                <div className={ styles.formWrapper }>
                    <div className={ styles.inputWrapper }>
                        <div className={ styles.fieldWrapper }>
                            <label htmlFor="email">Email</label>
                            <input type="email" name="" id="email" onChange={ chnageHendler } required />
                        </div>
                        <div className={ styles.fieldWrapper }>
                            <label htmlFor="password">Password</label>
                            <input type="password" name="" id="password" onChange={ chnageHendler } required />
                        </div>

                        <div className={ styles.fieldWrapper }>
                            <label htmlFor="repassword">Re-Password</label>
                            <input type="password" name="" id="repassword" onChange={ chnageHendler } />
                        </div>
                    </div>
                </div>

                <button>Register</button>
            </form>
            <div className={ styles.register }>
                <div className={ styles.joinUs }> <p>You have an accout already? </p>
                    <Link to="/login">Login</Link> </div>
            </div>
        </div>
    )

}

export default Register