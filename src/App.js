
import './App.css';
import Header from './components/Header'
import Body from './Pages/HomePage'
import PostForm from './Pages/SubmitForm/post'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './Pages/login'
import Register from './Pages/Register'
import Rent from './Pages/Rent'
import Sell from './Pages/Sell';
import {useContext } from 'react';
import UserContext from './Context';
import SingleCard from './Pages/DetailsPage'

const App=(props)=>{
  const context=useContext(UserContext);
 
    let PostPage;
    const {loggedIn}=context;
    if(loggedIn){
      PostPage=<Route path='/post' component={PostForm}/>
    }
    else{
      PostPage=null;
    }
    return (
      <BrowserRouter>
        <div className="App">
          <Header props={props} />
          <Switch>
          <Route exact path='/' component={Body}/>
          {PostPage}
          <Route path='/login' component={Login}/>
          <Route path='/signout' component={Body}/>
          <Route path='/register' component={Register}/>
          <Route path='/rent' component={Rent}/>
          <Route path='/sell' component={Sell}/>
          <Route path='/:id' component={SingleCard}/>
          </Switch>
  
  
        </div>
      </BrowserRouter>
    )
  
  }

export default App;
