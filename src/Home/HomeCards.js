import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeadphones, faMusic, faPlay, faPlayCircle } from '@fortawesome/free-solid-svg-icons'
import { useMediaQuery } from 'react-responsive'
import $ from 'jquery'
function HomeCards(){

    const rowStyle = {
        marginTop: '0px',
        marginBottom:'0px'
    };

    const bigIcon = {
        fontSize: '50px'
    };

    $(window).on('scroll',function() {
        var hT = $('#home-2').offset().top,
            hH = $('#home-2').outerHeight(),
            wH = $(window).height(),
            wS = $(this).scrollTop();
            let homecard2 = document.querySelectorAll('.homecard2')
        if (wS > ((hT+hH-wH)-400)){
            homecard2.forEach(item=>{
                item.classList.add('animated' ,'slideInUp')
            })
        }else{
            homecard2.forEach(item=>{
                item.classList.remove('animated' ,'slideInUp')
            })
        }

    });

    const isMobile = useMediaQuery({ maxDeviceWidth: 600 });

    function getCardStyle(pad){
        return isMobile===false?{ paddingTop:pad  }:{ paddingTop: '30px',height:'300px' }
    };

    return (
            <div>
            <div className='row white-text' style={rowStyle} id='home-2'>
                <div className='col s12 m3 homecard2' style={getCardStyle('300px')}>
                    <div className='card medium center transparent z-depth-0'>
                        <div className='card-title '>
                            <FontAwesomeIcon icon={faPlayCircle} style={bigIcon} />
                            <div className='card-title white-text'>Play</div>
                        </div>
                        <div className='card-content'>
                            <span>List of Songs That you will obssesively Listened To.We
                            are stepping in to creating highly curated lists of songs
                            </span>
                        </div>
                    </div>
                </div>

                <div className='col s12 m3 homecard2' style={getCardStyle('140px')}>
                    <div className='card medium center transparent z-depth-0'>
                        <div className='card-title'>
                            <FontAwesomeIcon icon={faHeadphones} style={bigIcon} />
                            <div className='card-title white-text'>Favourite</div>
                        </div>
                        <div className='card-content'>
                            <span>Behind every favourite song There is an Untold story.
                            Whats your favourite song ! </span>
                        </div>
                    </div>
                </div>

                <div className='col s12 m3 homecard2' style={getCardStyle('350px')}>
                    <div className='card medium center transparent z-depth-0'>
                        <div className='card-title'>
                            <FontAwesomeIcon icon={faPlay} style={bigIcon} />
                            <div className='card-title white-text'>Quality</div>
                        </div>
                        <div className='card-content'>
                            <span>Experience the classic song collection with
                            high definition sound quality like never before </span>
                        </div>
                    </div>
                </div>

                <div className='col s12 m3 homecard2' style={getCardStyle('250px')}>
                    <div className='card medium center transparent z-depth-0'>
                        <div className='card-title'>
                            <FontAwesomeIcon icon={faMusic} style={bigIcon} />
                            <div className='card-title white-text'>Videos</div>
                        </div>
                        <div className='card-content'>
                            <span>More curious to watch the video of your favourite song
                            We got you !</span>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        );
}

export default HomeCards