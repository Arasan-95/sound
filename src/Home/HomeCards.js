import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeadphones, faMusic, faPlay, faPlayCircle } from '@fortawesome/free-solid-svg-icons'

export default class HomeCards extends Component {

    rowStyle = {
        marginTop: '0px',
        marginBottom:'0px'
    }

    bigIcon = {
        fontSize: '50px'
    }

    render() {
        return (
            <div className='row white-text' style={this.rowStyle} id='home-2'>
                <div className='col s12 m3' style={{ paddingTop: '300px' }}>
                    <div className='card medium center transparent z-depth-0'>
                        <div className='card-title '>
                            <FontAwesomeIcon icon={faPlayCircle} style={this.bigIcon} />
                            <div className='card-title white-text'>Play</div>
                        </div>
                        <div className='card-content'>
                            <span>List of Songs That you will obssesively Listened To.We
                            are stepping in to creating highly curated lists of songs
                            </span>
                        </div>
                    </div>
                </div>

                <div className='col s12 m3' style={{ paddingTop: '140px' }} >
                    <div className='card medium center transparent z-depth-0'>
                        <div className='card-title'>
                            <FontAwesomeIcon icon={faHeadphones} style={this.bigIcon} />
                            <div className='card-title white-text'>Favourite</div>
                        </div>
                        <div className='card-content'>
                            <span>Behind every favourite song There is an Untold story.
                            Whats your favourite song ! </span>
                        </div>
                    </div>
                </div>

                <div className='col s12 m3' style={{ paddingTop: '350px' }}>
                    <div className='card medium center transparent z-depth-0'>
                        <div className='card-title'>
                            <FontAwesomeIcon icon={faPlay} style={this.bigIcon} />
                            <div className='card-title white-text'>Quality</div>
                        </div>
                        <div className='card-content'>
                            <span>Experience the classic song collection with
                            high definition sound quality like never before </span>
                        </div>
                    </div>
                </div>

                <div className='col s12 m3' style={{ paddingTop: '250px' }}>
                    <div className='card medium center transparent z-depth-0'>
                        <div className='card-title'>
                            <FontAwesomeIcon icon={faMusic} style={this.bigIcon} />
                            <div className='card-title white-text'>Videos</div>
                        </div>
                        <div className='card-content'>
                            <span>MOre curious to watch the video of your favourite song
                            We got you !</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}