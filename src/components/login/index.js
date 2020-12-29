import React, { Component } from 'react';
import styles from './index.module.css'
import { Link } from 'react-router-dom'
import UserContext from '../../Context';
const apiKey = 'AIzaSyBFr1QW_fF9sluMRPfYk6UzMgoOAxlFC0I'
const url=`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`
class Login extends Component {

    state = {
        email: '',
        password: ''
    }
    static contextType=UserContext;
    chnageHendler = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    submitHandler = (e) => {
        e.preventDefault();
        const { email, password} = this.state;
        
        fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({email,password})
        }).then(res => res.json())
        .then (data=>{
            this.context.logIn(data.username, data.email)
            localStorage.setItem("user", data.email)
            document.cookie=`x-auth-token=${data.idToken}`
            this.props.history.push('/')
        })
        .catch((e)=>{
            console.log(e);
        })
    }
    render() {
        return (
            <div className={ styles.container }>
                <h1 className={ styles.name }>Sign in</h1>
                <p>Sign in to save your favourite properties, searches, house prices and more.</p>
                <form action="" className={ styles.formBody } onSubmit={this.submitHandler}>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="" id="email" onChange={this.chnageHendler} />
                    <label htmlFor="password">Password</label>
                    <input type="password" name="" id="password" onChange={this.chnageHendler}/>
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
}

export default Login