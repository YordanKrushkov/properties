import React, { useState, useContext } from 'react';
import styles from './index.module.css'
import { Link, useHistory } from 'react-router-dom'
import UserContext from '../../Context';
import authenticate from '../../services/auth'
const url = 'http://localhost:4000/api/register'

const Register = () => {

    const [user, getUser] = useState({
        name: '',
        surname: '',
        email: '',
        password: '',
        repassword: '',
    })
    const context = useContext(UserContext);
    const history = useHistory();
    const chnageHendler = (e) => {
        getUser({
            ...user,
            [e.target.id]: e.target.value
        });
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        const { name, surname, email, password, repassword } = user
        if (password.length < 6 || password !== repassword) {
            return;
        };
        await authenticate(url, {
            name, surname, email, password
        }, (user) => {
            console.log(user);
            context.logIn(user);
            localStorage.setItem("user", email);
            history.push('/');
        }, (e) => {
            console.log(e);
            history.push('/register')
        })
    };
    return (
        <div className={ styles.container }>
            <h1 className={ styles.name }>Register</h1>
            <p>Sign in to save your favourite properties, searches, house prices and more.</p>
            <form action="" className={ styles.formBody } onSubmit={ submitHandler }>
                <div className={ styles.formWrapper }>
                    <div className={ styles.inputWrapper }>
                        <div className={ styles.fieldWrapper }>
                            <label htmlFor="name" className={ styles.label }>Name</label>
                            <input type="text" name="" id="name" onChange={ chnageHendler } className={ styles.input } required />
                        </div>
                        <div className={ styles.fieldWrapper }>
                            <label htmlFor="surname" className={ styles.label }>Surname</label>
                            <input type="text" name="" id="surname" onChange={ chnageHendler } className={ styles.input } required />
                        </div>
                        <div className={ styles.fieldWrapper }>
                            <label htmlFor="email" className={ styles.label }>Email</label>
                            <input type="email" name="" id="email" onChange={ chnageHendler } className={ styles.input } required />
                        </div>
                        <div className={ styles.fieldWrapper }>
                            <label htmlFor="password" className={ styles.label }>Password</label>
                            <input type="password" name="" id="password" onChange={ chnageHendler } className={ styles.input } required />
                        </div>

                        <div className={ styles.fieldWrapper }>
                            <label htmlFor="repassword" className={ styles.label }>Re-Password</label>
                            <input type="password" name="" id="repassword" onChange={ chnageHendler } className={ styles.input } />
                        </div>
                    </div>
                </div>

                <button className={ styles.button }>Register</button>
            </form>
            <div className={ styles.register }>
                <div className={ styles.joinUs }> <p className={ styles.p }>You have an accout already? </p>
                    <Link to="/login" className={ styles.login }>Login</Link> </div>
            </div>
        </div>
    )

}

export default Register