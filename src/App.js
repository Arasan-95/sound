import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import Albums from './PlayGround/Albums'
import HomePage from './PlayGround/HomePage';
import Login from './Login/Login'
import Footer from "./Footer/Footer";
import $ from 'jquery'
function App() {

  return (
    <div>

    <HomePage />
      <BrowserRouter>
        <Route path='/albums' exact component={Albums} />
        <Route path='/login' component={Login} />
      </BrowserRouter>
      <section className='divider' />
      <Footer />
    </div>

  )


}

export default App;


// <Route path='/' exact component={HomePage} />
// <Route path='/home' exact component={HomePage} />