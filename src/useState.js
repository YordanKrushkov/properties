import  { Component } from 'react'
import UserContext from './Context'

class UseState extends Component {

    state = {
        loggedIn: false,
        email: '',
        
    }

    logIn = (email) => {
        this.setState({
            loggedIn: true,
            email:email,
           
        })
        console.log(this.state);
    }

    logOut = () => {
        document.cookie = 'x-auth-token=';
        localStorage.removeItem('user')
        this.setState({
            loggedIn: false,
            email: null
        })
    }
    componentDidMount() {

        if (localStorage.getItem('user')) {
            this.setState({
                loggedIn: true,
                email: localStorage.getItem('user'),
            })
        } else {
                this.setState({
                loggedIn:false,
                email:null,
            })
        }};

    render() {
        const {
            loggedIn,
            email 
            } = this.state
        if (loggedIn === null) {
            <div>Loading...</div>
        }
        return (
            <UserContext.Provider value={ {
                loggedIn,
                email,
                logIn: this.logIn,
                logOut: this.logOut
            } }>
                {this.props.children }
            </UserContext.Provider>

        )
    }
}

export default UseState