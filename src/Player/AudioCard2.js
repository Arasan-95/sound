import React, { Component } from 'react'
import $ from 'jquery'

class AudioCard2 extends Component {

    title = this.props.data.title;
    cover = this.props.data.cover;
    albumId = this.props.data.id;
    songSrc = this.props.data.src;
    audio = null
    progress = null
    forward = null
    audioAnchor = null
    
    state = {
        playing: false,
        progressStyle : {
            width: 1,
        },
        duration : '00:00'
    }    

    componentDidMount() {
        this.audio = document.querySelector(".aud."+this.albumId);
        this.progress = document.querySelector('.progress.green.'+this.albumId)
        this.forward = document.querySelector('.forward.'+this.albumId)
        this.backward = document.querySelector('.backward.'+this.albumId)
        this.audioAnchor = document.querySelector('.audioAnchor')

        $(window).on('scroll',function() {
            var hT = $('.audioAnchor').offset().top,
                hH = $('.audioAnchor').outerHeight(),
                wH = $(window).height(),
                wS = $(this).scrollTop();
                let audioAnchor = document.querySelectorAll('.audioAnchor')
            console.log(hT,hH,wH,wS)
            if (wS > ((hT+hH-wH)-400)){
                audioAnchor.forEach(item=>{
                item.classList.add('animated' ,'slideInUp')
              })
            }else{
                audioAnchor.forEach(item=>{
                    item.classList.remove('animated' ,'slideInUp')
                  })
            }

        });

        this.backward.addEventListener('click',()=>{
            if(this.audio.currentTime>0){
            this.audio.currentTime=this.audio.currentTime-10
            let prog = (this.audio.currentTime/this.audio.duration)*100
            
            let minutes = parseInt(this.audio.duration/ 60, 10);
            let seconds = parseInt(this.audio.duration % 60);
            let currentMinute = Math.floor(this.audio.currentTime / 60);
            let currentSecond = Math.floor(this.audio.currentTime % 60)
            let totaltime = minutes+":"+seconds
            let played = currentMinute+":"+currentSecond

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
            
            let minutes = parseInt(this.audio.duration/ 60, 10);
            let seconds = parseInt(this.audio.duration % 60);
            let currentMinute = Math.floor(this.audio.currentTime / 60);
            let currentSecond = Math.floor(this.audio.currentTime % 60)
            let totaltime = minutes+":"+seconds
            let played = currentMinute+":"+currentSecond

            console.log(currentMinute,currentSecond)

            this.setState({
                progressStyle:{
                    width: prog
                },
                duration: played+"/"+totaltime
            })
        })

        var restorebtn =  document.querySelector('.restorebtn.'+this.albumId);
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



    render() {
        return (
           <div className="col s12 m6 l3 audioAnchor" id={this.albumId} >
            <div className="card z-depth-1 " style={{ transform: 'translateX(0px)', opacity: 1 }}>
                <div className="card-image">
                    <img src={this.cover} alt='coverImage' />
                    <span style={{ fontFamily: " 'Barlow', sans-serif", padding: '0px', fontSize: 'inherit' }} className="card-title">{this.title}</span>
                        <a href='#!' id='playbtn' onClick={this.state.playing==false?this.play:this.pause} 
                        className="btn-floating halfway-fab green lighten-1 ">
                        {this.state.playing==false?<i className='material-icons'>play_arrow</i>:
                        <i className='material-icons'>pause</i>}</a>
                </div>
                <div className="card-content center-align " style={{ paddingBottom: '5px' }}>
                    <div className='row' id='player'>
                        <div className='col s12 m12 l12'>
                        <div className='col s4'><a href='#!' className={'black-text restorebtn '+this.albumId}><i className='material-icons' >restore</i></a></div>    
                        <div className='col s4'><a href='#!' className={'black-text backward '+this.albumId}><i className='material-icons' >fast_rewind</i></a></div>
                            <div className='col s4'><a href='#!' className={'black-text forward '+this.albumId}><i className='material-icons' >fast_forward</i></a></div>
                            <span class='right'>{this.state.duration}</span>
                            <progress className={'progress green '+this.albumId} max='100' value={this.state.progressStyle.width}></progress>
                            </div>
                            
                    </div>
                </div>
            </div>
            <audio className={'aud '+this.albumId} src={this.songSrc}></audio>
        </div>
        )
    }
}

export default AudioCard2