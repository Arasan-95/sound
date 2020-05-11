import React, { Component } from 'react'
import data from './data'
import AudioCard2 from './AudioCard';

import backgroundImage from '../image/image-4.jpg'

class AudioGrid extends Component {
     
    render() {
        let backgroundStyle = {
            width: "100%",
            height: "100%",
            backgroundImage: `url(${backgroundImage})`,
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
          }
          const grids = data.songs.map(item=>{
            return <AudioCard2 data={item} key={item.title}/>
        });

        return (
     
            <div style={backgroundStyle}>
                <div className='container' id='audio-grid' style={{marginTop:'0px',marginBottom:'0px'}}>
                <div style={{margin:'0px',padding:'20px'}}><blockquote>Recommended </blockquote></div>
                <div className="row" style={{marginBottom:'0px'}} >
                        { grids }
                </div>
              </div>
            </div>
            
        )
    }
}   

export default AudioGrid