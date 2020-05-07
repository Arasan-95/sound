import React from 'react';
import './App.css';
import NavBar from './navbar/NavBar';
import background from './image/image-4.jpg'
import background2 from './image/image-2.jpg'
import HomeCards from './Home/HomeCards';
import Home from './Home/Home';
import Footer from './Footer/Footer';

var backgroundStyle = {
    width: "100%",
    height: "100%",
    backgroundImage: `url(${background})` ,
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
}

var backgroundStyle2 = {
  width: "100%",
  height: "100%",
  backgroundImage: `url(${background2})` ,
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover'
}

function App() {
  return (
    <div>
      <div style={backgroundStyle}>
        <NavBar />
        <Home />
      </div>
      <div style={backgroundStyle2}>
        <HomeCards />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
