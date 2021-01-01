import React from 'react'
import styles from './index.module.css'
import pic from '../../images/download.jpg'

const Profile= ()=>{

const showMenu=(e)=>{
const menu= document.getElementById('menu');
    if(menu.style.display==='none'){
        menu.style.display='flex'
    }else{
        menu.style.display='none'
        
    }
}

return(
    <div className={styles.container}>
        <header className={styles.header}>
        <div className={styles.picture}>
            <img  className={styles.pic} src={pic} alt="profilePicture"/>
        </div>
        <div className={styles.details}>
            <h1 className={styles.name}>My Profile</h1>
            <div className={styles.detailsWrapper} >
            <div className={styles.myDetials}>
            <h6 className={styles.email}>Name:</h6>
            <h6 className={styles.email}>Email:</h6>
            <h6 className={styles.email}>Phone:</h6>
            <h6 className={styles.email}>Live in:</h6>
            </div>
            <div className={styles.myDetials}>
            <h6 className={styles.email}>Yordan Krushkov</h6>
            <h6 className={styles.email}>darkman_89@abv.bg</h6>
            <h6 className={styles.email}>074 933 166</h6>
            <h6 className={styles.email}>London, UK</h6>
            </div>

            </div>
        </div> 
        <div className={styles.menu} onClick={showMenu}>menu</div>
         <div id="menu" className={styles.settings}>
             <ul className={styles.ul}>
                 <li className={styles.li}>Edit Profile</li>
                 <li className={styles.li}>Messeges</li>
                 <li className={styles.li}>SignOut</li>
             </ul>
         </div>
        </header>
        <main className={styles.main}> 
         <div className={styles.myProparties}>

         </div>
         <div className={styles.likedProperties}>

         </div>
         
        </main>
    </div>
)

}
export default Profile