import React, { useContext } from 'react';
import styles from './index.module.css'
import { Link } from 'react-router-dom'
import UserContext from '../../Context';
import singout from '../../images/logout.svg'

const Header = () => {
    const context = useContext(UserContext)
    const onLogout = () => { context.logOut(); }

    let nav;
    const { loggedIn } = context
    if (loggedIn) {
        nav = <ul className={ styles.ul }>
            <li className={ styles.li }><Link to="/post">Post</Link></li>
            <li className={ styles.li }><Link to="/rent">To Rent</Link></li>
            <li className={ styles.li }><Link to="/sell">For Sale</Link></li>

            <Link to="/signout" className={ styles.logOut } onClick={ onLogout }><img className={ styles.img } src={ singout } /></Link>
        </ul>
    } else {
        nav = <ul className={ styles.ul }>
            <li className={ styles.li }><Link to="/rent">For Rent</Link></li>
            <li className={ styles.li }><Link to="/sell">For Sell</Link></li>
            <li className={ styles.li }> <Link to="/login" className={ styles.login } >LOGIN</Link> </li>
        </ul>
    }
    return (
        <div className={ styles.container }>
            <Link to="/"> <h1 className={ styles.h1 }>RBS</h1></Link>
            {nav }
        </div>
    )
}

export default Header
