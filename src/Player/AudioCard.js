import React from 'react'
import Player from './Player'

const AudioCard = (props) => {

    const { title, cover } = props.data;

    return (
        <div className="col s12 m6 l3" id={title} >
        <div className="card z-depth-1" style={{transform: 'translateX(0px)', opacity: 1}}>
            <div className="card-image">
                <img src={cover} alt='coverImage' />
                <span style={{ fontFamily: " 'Barlow', sans-serif",padding:'0px',fontSize:'inherit' }} className="card-title">{title}</span>
                <a href='#!' className="btn-floating halfway-fab green lighten-1"><i className="material-icons">play_arrow</i></a>
            </div>
            <div className="card-content center-align " style={{paddingBottom:'5px'}}>
                <Player />
            </div>
        </div>
        </div>

    )
}

export default AudioCard