import React from 'react'

const UserContext=React.createContext({
    loggedIn: false,
    email: null,
    name: null,
    number:null,
    logIn:()=>{},
    logOut:()=>{},
})

export default UserContext;