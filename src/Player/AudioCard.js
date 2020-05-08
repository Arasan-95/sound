import React, { Component } from 'react'
import Player from './Player'

const AudioCard = (props) => {

    const { title, cover } = props.data;

    return (
        <div className="col s12 m6 l3" >
        <div className="card ">
            <div className="card-image">
                <img src={cover}  />
                <span style={{ fontFamily: " 'Barlow', sans-serif" }} className="card-title">{title}</span>
                <a className="btn-floating halfway-fab green"><i className="material-icons">play_arrow</i></a>
            </div>
            <div className="card-content center-align">
                <Player />
            </div>
        </div>
        </div>

    )
}

export default AudioCard