import React, { Component } from 'react';
import styles from './index.module.css'
import { Link } from 'react-router-dom'
const apiKey = 'AIzaSyBFr1QW_fF9sluMRPfYk6UzMgoOAxlFC0I'
const url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`
class Register extends Component {

    state = {
        email: '',
        password: '',
        repassword: '',
    }

    chnageHendler = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    submitHandler = (e) => {
        e.preventDefault();
        const { email, password, repassword } = this.state
        if (password.length < 6 || password !== repassword) {
            return;
        }
        fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({email,password})
        }).then(res => res.json())
        .then (data=>{
            this.props.history.push('/login')
            return data
        })
        .catch((e)=>{
            console.log(e);
        })
    }
    render() {
        return (
            <div className={ styles.container }>
                <h1 className={ styles.name }>Register</h1>
                <p>Sign in to save your favourite properties, searches, house prices and more.</p>
                <form action="" className={ styles.formBody } onSubmit={ this.submitHandler }>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="" id="email" onChange={ this.chnageHendler } />
                    <label htmlFor="password">Password</label>
                    <input type="password" name="" id="password" onChange={ this.chnageHendler } />
                    <label htmlFor="repassword">Repeat Password</label>
                    <input type="password" name="" id="repassword" onChange={ this.chnageHendler } />
                    <button>Register</button>
                </form>
                <div className={ styles.register }>
                    <div className={ styles.joinUs }> <p>You have an accout already? </p>
                        <Link to="/login">Login</Link> </div>
                </div>
            </div>
        )
    }
}

export default Register