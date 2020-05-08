import React from 'react'
import data from './data'
import AudioCard from './AudioCard';

function AudioGrid() {


    const grids = data.songs.map(item=>{
        return <AudioCard data={item}/>
    });

    console.log(grids)
    return (
        <div className='container' id='audio-grid'>
            <div className="row" >
                
                    { grids }
            </div>
        </div>
    );
}   

export default AudioGrid