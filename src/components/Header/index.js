import React, { useContext } from 'react';
import styles from './index.module.css'
import { Link } from 'react-router-dom'
import UserContext from '../../Context';

const Header = () => {
    const context = useContext(UserContext)
    const onLogout = () => {
        context.logOut();
    }

    let nav;
    const { loggedIn } = context
    if (loggedIn) {
        nav = <ul>
            <li><Link to="/post">Post</Link></li>
            <li><Link to="/rent">For Rent</Link></li>
            <li><Link to="/sell">For Sell</Link></li>
            <li><Link to="/contacts">Contacts</Link></li>
            <li> <Link to="/signout" className={ styles.login } onClick={ onLogout }>SignOut</Link> </li>
        </ul>
    } else {
        nav = <ul>
            <li><Link to="/rent">For Rent</Link></li>
            <li><Link to="/sell">For Sell</Link></li>
            <li><Link to="/contacts">Contacts</Link></li>
            <li> <Link to="/login" className={ styles.login } >LOGIN</Link> </li>
        </ul>
    }
    return (
        <div className={ styles.container }>
            <Link to="/"> <h1>Welcome</h1></Link>
            {nav }
        </div>
    )


}

export default Header
