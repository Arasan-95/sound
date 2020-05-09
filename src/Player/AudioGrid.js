import React from 'react'
import data from './data'
import AudioCard from './AudioCard';
import AudioCard2 from './AudioCard2';

function AudioGrid() {


    const grids = data.songs.map(item=>{
        return <AudioCard2 data={item} key={item.title}/>
    });

    return (
        <div className='container' id='audio-grid' style={{marginTop:'5%'}}>
            <blockquote>Recommended </blockquote>
            <div className="row" >
                    { grids }
            </div>
        </div>
    );
}   

export default AudioGrid