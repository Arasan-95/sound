import React, { Component } from 'react'
import '../App.css';
import NavBar from '../navbar/NavBar';
import background from '../image/image-4.jpg'
import background2 from '../image/image-2.jpg'
import HomeCards from '../Home/HomeCards';
import Home from '../Home/Home';
import Footer from '../Footer/Footer';
import AudioGrid from '../Player/AudioGrid';
import { useMediaQuery } from 'react-responsive'


function HomePage(){

    const onMobile = useMediaQuery({ maxDeviceWidth: 600 });

    let backgroundStyle = {
        width: "100%",
        height: "100%",
        backgroundImage: `url(${background})`,
        backgroundPosition: 'center',
        backgroundAttachment: onMobile==false?'fixed':'scroll',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }
    
      let backgroundStyle2 = {
        width: "100%",
        height: "100%",
        backgroundImage: `url(${background2})`,
        backgroundPosition: 'center',
        backgroundAttachment: onMobile==false?'fixed':'scroll',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }

      
  const getParameter=(name)=>{
    let url =null
    if (url==null) url = window.location.href;
      name = name.replace(/[\[\]]/g, '\\$&');
      var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
          results = regex.exec(url);
      if (!results) return null;
      if (!results[2]) return '';
      return decodeURIComponent(results[2].replace(/\+/g, ' '));
  }
    
    return (
        <div >
        <div style={backgroundStyle}>
            <NavBar />
          <Home />
        </div>
        <div style={backgroundStyle2}>
          <HomeCards />
        </div>
        <div>
          <AudioGrid />
        </div>
        <div>
        </div>
        </div>
    )
}

export default HomePage