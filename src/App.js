import React from 'react';
import './App.css';
import NavBar from './navbar/NavBar';
import background from './image/image-4.jpg'
import background2 from './image/image-2.jpg'
import HomeCards from './Home/HomeCards';
import Home from './Home/Home';
import Footer from './Footer/Footer';
import AudioGrid from './Player/AudioGrid';
import { useMediaQuery } from 'react-responsive'





function App() {

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

  return (
    <div>
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
        <section className='divider'/>
          <Footer />
        </div>
      </div>
    </div>
  )


}

export default App;
