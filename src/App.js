import React from 'react';
import './App.css';
import NavBar from './navbar/NavBar';
import background from './image/image-4.jpg'
import background2 from './image/image-2.jpg'
import HomeCards from './Home/HomeCards';
import Home from './Home/Home';
import Footer from './Footer/Footer';
import AudioGrid from './Player/AudioGrid';
import TestPlayer from './TestPlayer/TestPlayer';

var backgroundStyle = {
  width: "100%",
  height: "100%",
  backgroundImage: `url(${background})`,
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover'
}

var backgroundStyle2 = {
  width: "100%",
  height: "100%",
  backgroundImage: `url(${background2})`,
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover'
}

function App() {

  // return (
  //   <div>
  //   <TestPlayer />
  //   </div>)

  return (
    <div>
      <div>
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
        <section className='divider'/>
          <Footer />
        </div>
      </div>
    </div>
  )


}

export default App;
