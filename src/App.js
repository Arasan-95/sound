import React from 'react';
import './App.css';
import { BrowserRouter, Route, HashRouter, Switch } from 'react-router-dom'
import Albums from './PlayGround/Albums'
import HomePage from './PlayGround/HomePage';
import Login from './Login/Login'
import Footer from "./Footer/Footer";
import $ from 'jquery'
function App() {

  const getHashParams=()=> {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
        
    while ( e = r.exec(q)) {
       hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
  }

  const {access_token} = getHashParams()
  console.log(access_token)
  
  return (
    <div>
      <HomePage />
      <HashRouter basename={process.env.PUBLIC_URL}>
       <Switch>
       <Route path='/albums' component={Albums} />
       <Route path='/login' component={Login} />
       {access_token!=null ?<Route path='/' component={Albums} />:''}
       </Switch>
      </HashRouter>
      <section className='divider' />
      <Footer />
    </div>

  )


}

export default App;


// <Route path='/' exact component={HomePage} />
// <Route path='/home' exact component={HomePage} />