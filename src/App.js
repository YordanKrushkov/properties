
import './App.css';
import Header from './components/Header'
import Body from './components/main'
import PostForm from './components/form/post'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './components/login'
import Register from './components/Register'
import Rent from './components/Rent'
import Sell from './components/Sell';
import { Component } from 'react';
import UserContext from './Context';


class App extends Component {
static contextType=UserContext;
render() {
  let PostPage;
  const {loggedIn}=this.context;
  if(loggedIn){
    PostPage=<Route path='/post' component={PostForm}/>
  }
  else{
    PostPage=null;
  }
  return (
    <BrowserRouter>
      <div className="App">
        <Header props={this.props} />
        <Switch>
        <Route exact path='/' component={Body}/>
        {PostPage}
        <Route path='/login' component={Login}/>
        <Route path='/signout' component={Body}/>
        <Route path='/register' component={Register}/>
        <Route path='/rent' component={Rent}/>
        <Route path='/sell' component={Sell}/>
        </Switch>


      </div>
    </BrowserRouter>
  )
} 
}

export default App;
