import React from 'react';
import './App.css';
import { BrowserRouter, Route, HashRouter } from 'react-router-dom'
import Albums from './PlayGround/Albums'
import HomePage from './PlayGround/HomePage';
import Login from './Login/Login'
import Footer from "./Footer/Footer";
import $ from 'jquery'
function App() {

  console.log(process.env.PUBLIC_URL)
  return (
    <div>

      <HomePage />
      <HashRouter >
        <Route path='/albums' exact component={Albums} />
        <Route path='/login' component={Login} />
      </HashRouter>
      <section className='divider' />
      <Footer />
    </div>

  )


}

export default App;


// <Route path='/' exact component={HomePage} />
// <Route path='/home' exact component={HomePage} />