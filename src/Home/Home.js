import React, { Component } from 'react'
import trevor from '../image/trevor_mcnevan.jpg'
import $ from 'jquery'
export default class Home extends Component {

    rowStyle = {
        marginBottom: '0px'
    }

    bigIcon = {
        fontSize: '50px'
    }

    componentDidMount(){

        $(window).on('scroll',function() {
            var hT = $('#home-1').offset().top,
                hH = $('#home-1').outerHeight(),
                wH = $(window).height(),
                wS = $(this).scrollTop();
                let homecard = document.querySelector('.homecard')
            if (wS > ((hT+hH-wH)-400)){
                homecard.classList.add('animated' ,'slideInUp')
            }else{
                homecard.classList.remove('animated' ,'slideInUp')
            }

        });
    }

    render() {
        return (
            <div className='row white-text' style={this.rowStyle} id='home-1'>
           
                <div className='col s12 m6 offset-m2' style={{ paddingTop: '150px',paddingBottom:'50px' }}>
                    <div className='homecard card medium center transparent z-depth-1'>
                        
                        <div className='card-title'>
                            <img style={{maxWidth:'70px',height:'auto',objectFit:'contain'}} src={trevor} className='circle' alt='homeImage'/>
                            <div className='black-text text-darken-5 top'>Trever McNevan</div>
                        </div>
                        
                        <div className='card-content black-text left-align'>
                            <blockquote>Music drives you. It wakes you up. 
                            And, at the end of the day, the correct tune will chill you down </blockquote>

                            <blockquote>Without language; 
                            it was below and before speech, and it is above and beyond all words</blockquote>
                            
                            <div className='center'>
                                <a href='#audio-grid' className='btn black-text transparent'>Playlist</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}