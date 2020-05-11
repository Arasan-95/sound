import React from 'react';
import './App.css';
import { BrowserRouter, Route, HashRouter } from 'react-router-dom'
import Albums from './PlayGround/Albums'
import HomePage from './PlayGround/HomePage';
import Login from './Login/Login'
import Footer from "./Footer/Footer";
import $ from 'jquery'
function App() {

  return (
    <div>

    <HomePage />
      <HashRouter basename={process.env.PUBLIC_URL}>
        <Route path={process.env.PUBLIC_URL+'/albums'} exact component={Albums} />
        <Route path={process.env.PUBLIC_URL+'/login'} component={Login} />
      </HashRouter>
      <section className='divider' />
      <Footer />
    </div>

  )


}

export default App;


// <Route path='/' exact component={HomePage} />
// <Route path='/home' exact component={HomePage} />