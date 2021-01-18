import React, { useState, useContext } from 'react';
import styles from './index.module.css'
import { Link, useHistory } from 'react-router-dom'
import UserContext from '../../Context';
import authenticate from '../../services/auth'
const url = 'http://localhost:4000/api/login'

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

    };
    const submitHandler = async (e) => {
        e.preventDefault();
        const { email, password } = user;

        await authenticate(url, {
            email, password
        }, (user) => {
            context.logIn(user);
            localStorage.setItem("user", email);
            history.push('/');
        }, (e) => {
            console.log(e);
            history.push('/login')
        })
    };
    return (
        <div className={ styles.container }>
            <h1 className={ styles.name }>Sign in</h1>
            <p className={ styles.p }>Sign in to save your favourite properties, searches, house prices and more.</p>
            <form action="" className={ styles.formBody } onSubmit={ submitHandler }>
                <label htmlFor="email" className={ styles.label }>Email</label>
                <input type="email" name="" id="email" className={ styles.input } onChange={ chnageHendler } />
                <label htmlFor="password" className={ styles.label }>Password</label>
                <input type="password" name="" id="password" className={ styles.input } onChange={ chnageHendler } />
                <button className={ styles.button }>Login</button>
            </form>
            <a href="/forgot" className={ styles.link }>Forgot your password?</a>
            <div className={ styles.register }>
                <div className={ styles.joinUs }> <p className={ styles.p }>You don't have an accout yet? </p>
                    <Link to="/register" className={ styles.a }>Join us now</Link>
                </div>
            </div>
        </div>
    )
}
export default Login