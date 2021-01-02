import React, { useState, useContext } from 'react';
import styles from './index.module.css'
import { Link, useHistory } from 'react-router-dom'
import UserContext from '../../Context';
const apiKey = 'AIzaSyBFr1QW_fF9sluMRPfYk6UzMgoOAxlFC0I'
const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`

const Login = () => {
    const [user, getUser] = useState({
        email: '',
        password: '',
    })

    const context = useContext(UserContext);
    const history = useHistory();
    const chnageHendler = (e) => {
        getUser({
            ...user,
            [e.target.id]: e.target.value
        })

    }
    const submitHandler = (e) => {
        e.preventDefault();
        const { email, password } = user;

        fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        })
            .then(res => res.json())
            .then((data) => {
                if (data.email) {
                    context.logIn(data.email);
                    localStorage.setItem("user", data.email);

                }
                document.cookie = `x-auth-token=${data.idToken}`
                history.push('/');
            }).catch((e) => {
                console.log(e);
                history.push('/login')
            })
    }
    return (
        <div className={ styles.container }>
            <h1 className={ styles.name }>Sign in</h1>
            <p>Sign in to save your favourite properties, searches, house prices and more.</p>
            <form action="" className={ styles.formBody } onSubmit={ submitHandler }>
                <label htmlFor="email">Email</label>
                <input type="email" name="" id="email" onChange={ chnageHendler } />
                <label htmlFor="password">Password</label>
                <input type="password" name="" id="password" onChange={ chnageHendler } />
                <button>Login</button>
            </form>
            <a href="#" className={ styles.link }>Forgot your password?</a>
            <div className={ styles.register }>
                <div className={ styles.joinUs }> <p>You don't have an accout yet? </p>
                    <Link to="/register">Join us now</Link>
                </div>
            </div>
        </div>
    )
}
export default Login