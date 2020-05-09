import React, { Component } from 'react'
import './TestPlayer.css'
import $ from 'jquery'
import Player from '../Player/Player';
import AudioCard from '../Player/AudioCard';

class TestPlayer extends Component {


    audio = null
    progress = null
    forward = null
    
    state = {
        playing: false,
        progressStyle : {
            width: 1,
        },
        duration : '00:00'
    }    
    componentDidMount() {
        this.audio = document.querySelector(".aud");
        this.progress = document.querySelector('.progress.green')
        this.forward = document.querySelector('.forward')
        this.backward = document.querySelector('.backward')

        this.backward.addEventListener('click',()=>{
            if(this.audio.currentTime>0){
            this.audio.currentTime=this.audio.currentTime-10
            let prog = (this.audio.currentTime/this.audio.duration)*100
            
            var minutes = parseInt(this.audio.duration/ 60, 10);
            var seconds = parseInt(this.audio.duration % 60);
            var currentMinute = Math.floor(this.audio.currentTime / 60);
            var currentSecond = Math.floor(this.audio.currentTime % 60)
            var totaltime = minutes+":"+seconds
            var played = currentMinute+":"+currentSecond

            console.log(currentMinute,currentSecond)

            this.setState({
                progressStyle:{
                    width: prog
                },
                duration: played+"/"+totaltime
            })
            }
        })

        this.forward.addEventListener('click',()=>{
            this.audio.currentTime=this.audio.currentTime+10
            let prog = (this.audio.currentTime/this.audio.duration)*100
            
            var minutes = parseInt(this.audio.duration/ 60, 10);
            var seconds = parseInt(this.audio.duration % 60);
            var currentMinute = Math.floor(this.audio.currentTime / 60);
            var currentSecond = Math.floor(this.audio.currentTime % 60)
            var totaltime = minutes+":"+seconds
            var played = currentMinute+":"+currentSecond

            console.log(currentMinute,currentSecond)

            this.setState({
                progressStyle:{
                    width: prog
                },
                duration: played+"/"+totaltime
            })
        })

        var restorebtn =  document.querySelector('.restorebtn');
        restorebtn.addEventListener('click',()=>{
            this.audio.currentTime=0
            this.setState({
                progressStyle:{
                    width:1
                },
                duration: '00::00'
            })
        })

        this.audio.addEventListener('timeupdate',()=>{

            var minutes = parseInt(this.audio.duration/ 60, 10);
            var seconds = parseInt(this.audio.duration % 60);
            var currentMinute = Math.floor(this.audio.currentTime / 60);
            var currentSecond = Math.floor(this.audio.currentTime % 60)

            var totaltime = minutes+":"+seconds
            var played = currentMinute+":"+currentSecond
            

            let currentTime = Math.round(this.audio.currentTime)
            let duration = this.audio.duration
            let currentWidth = this.state.progressStyle.width
            let prog = (currentTime/duration)*100
            this.setState({
                duration: played+"/"+totaltime
            })
            prog>=1 && this.setState({
                progressStyle: {
                    width: prog
                },
            })
            
        },true)
    }

    play = () => {
        this.audio.play()
        this.setState({
            playing: true
        })
    }

    pause = () => {
        this.audio.pause()
        this.setState({
            playing: false
        })
    }

    data = {
        "title": "BIG LOVE",
        "cover": require("../image/big-love.jpg")
    }
    render() {
        return (





<div> <audio className='aud' src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"></audio>
<div className='container' id='audio-grid' style={{ marginTop: '5%' }}>
    <div className="row" >
        <div className="col s12 m6 l3" id={this.data.title} >
            <div className="card z-depth-1" style={{ transform: 'translateX(0px)', opacity: 1 }}>
                <div className="card-image">
                    <img src={this.data.cover} alt='coverImage' />
                    <span style={{ fontFamily: " 'Barlow', sans-serif", padding: '0px', fontSize: 'inherit' }} className="card-title">{this.data.title}</span>
                        <a href='#!' id='playbtn' onClick={this.state.playing==false?this.play:this.pause} 
                        className="btn-floating halfway-fab green lighten-1 ">
                        {this.state.playing==false?<i className='material-icons'>play_arrow</i>:
                        <i className='material-icons'>pause</i>}</a>
                </div>
                <div className="card-content center-align " style={{ paddingBottom: '5px' }}>
                    <div className='row' id='player'>
                        <div className='col s12 m12 l12'>
                        <div className='col s4'><a href='#!' className='black-text restorebtn'><i className='material-icons' >restore</i></a></div>    
                        <div className='col s4'><a href='#!' className='black-text backward'><i className='material-icons' >fast_rewind</i></a></div>
                            <div className='col s4'><a href='#!' className='black-text forward'><i className='material-icons' >fast_forward</i></a></div>
                            <span class='right'>{this.state.duration}</span>
                            <progress className='progress green' max='100' value={this.state.progressStyle.width}></progress>
                            </div>
                            
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>






        )
    }

}

export default TestPlayer
