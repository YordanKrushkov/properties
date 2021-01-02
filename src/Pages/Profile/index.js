import React, { useState, useEffect, useContext } from 'react'
import styles from './index.module.css'
import pic from '../../images/download.jpg'
import { Link } from 'react-router-dom'
import getUsers from '../../services/getUsers';
import UserContext from '../../Context';
const Profile = () => {

    const showMenu = (e) => {
        const menu = document.getElementById('menu');
        if (menu.style.display === 'none') {
            menu.style.display = 'flex'
        } else {
            menu.style.display = 'none'

        }
    }

    const context = useContext(UserContext)
    const [users, takeUsers] = useState([]);
    const [user, takeUser] = useState([]);
    const id = getUsers.renderUsers(users, context.email)
    useEffect(() => {
        getUsers.getData(takeUsers);
    }, []);
    getUsers.getSingleProp(takeUser, id)
    let u=user
    let {profilePicture, firstName, lastName, phone, location} = u;
    return (
        <div className={ styles.container }>
            <header className={ styles.header }>
                <div className={ styles.picture }>
                    <img className={ styles.pic } src={ profilePicture ? profilePicture : 'no picture' } alt="profilePicture" />
                </div>
                <div className={ styles.details }>
                    <h1 className={ styles.name }>My Profile</h1>
                    <div className={ styles.detailsWrapper } >
                        <div className={ styles.myDetials }>
                            <h6 className={ styles.email }>Name:</h6>
                            <h6 className={ styles.email }>Email:</h6>
                            <h6 className={ styles.email }>Phone:</h6>
                            <h6 className={ styles.email }>Live in:</h6>
                        </div>
                        <div className={ styles.myDetials }>
                            <h6 className={ styles.email }>{ firstName ? `${firstName} ${lastName}` : 'null' }</h6>
                            <h6 className={ styles.email }>{ context.email }</h6>
                            <h6 className={ styles.email }>{ phone ? phone : null }</h6>
                            <h6 className={ styles.email }>{ location ? location : null }</h6>
                        </div>

                    </div>
                </div>
                <div className={ styles.menu } onClick={ showMenu }>menu</div>
                <div id="menu" className={ styles.settings }>
                    <ul className={ styles.ul }>
                        <li className={ styles.li }><Link to="/edit">Edit Profile</Link></li>
                        <li className={ styles.li }>Messeges</li>
                        <li className={ styles.li }>SignOut</li>
                    </ul>
                </div>
            </header>
            <main className={ styles.main }>
                <div className={ styles.myProparties }>

                </div>
                <div className={ styles.likedProperties }>

                </div>

            </main>
        </div>
    )

}
export default Profile