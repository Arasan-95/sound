import React, { Component } from 'react'
import Spotify from 'spotify-web-api-js'
import AudioCard from '../Player/AudioCard';
import NavBar from '../navbar/NavBar';
import backgroundImage from '../image/image-4.jpg'
import $ from 'jquery'

const spotifyClient = new Spotify();

class Albums extends Component{

    audio = null
    constructor(){
        super();
        const params = this.getHashParams()
        this.state= {
            loggedIn: false, 
            token: null,
            refreshToken: null,
            recommendedSongs: [],
            list2: []
        }
    
        if(params.access_token){
          spotifyClient.setAccessToken(params.access_token)
        }
      }


      componentDidMount(){

        $(document).ready(function () {
          $(this).scrollTop(0);
        });

        this.audio = document.querySelector('.audio1')
        spotifyClient.searchTracks('ALL').then(response=>response.tracks.items.filter(el=>el.preview_url!=null))
        .then(sub=>sub.forEach(a=>{
            const {external_ids:{isrc},name, preview_url, album:{images} } = a
            this.setState({
              recommendedSongs:[...this.state.recommendedSongs,{
                id: isrc,
                title: name,
                src: preview_url,
                cover: images[0].url
              }]
            })
        }))

        spotifyClient.searchTracks('You').then(response=>response.tracks.items.filter(el=>el.preview_url!=null))
        .then(sub=>sub.forEach(a=>{
            const {external_ids:{isrc},name, preview_url, album:{images} } = a
            this.setState({
              list2:[...this.state.list2,{
                id: isrc,
                title: name,
                src: preview_url,
                cover: images[0].url
              }]
            })
        }))
    
      }

      getHashParams=()=> {
        var hashParams = {};
        var e, r = /([^&;=]+)=?([^&;]*)/g,
            q = window.location.hash.substring(1);
            
        while ( e = r.exec(q)) {
           hashParams[e[1]] = decodeURIComponent(e[2]);
        }
        return hashParams;
      }


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

        const audioCards = this.state.recommendedSongs.length>0 &&  this.state.recommendedSongs.map(item =>{
            return <AudioCard className='transparent' data={item} key={item.id}/>
        }) 
        const secondCards = this.state.list2.length>0 &&  this.state.list2.map(item =>{
          return <AudioCard className='transparent' data={item} key={item.id}/>
        }) 

        return (
            <div id='#albums' style={backgroundStyle} >
              <div className='container' style={{marginTop:'0px'}}>
                <div className='row'>
                <div style={{margin:'0px',padding:'20px'}}><blockquote>Trending </blockquote></div>
                    {audioCards.length>1 && audioCards}
                </div>
                <div className='row' style={{marginBottom:'0px'}}>
                <div style={{margin:'0px',padding:'20px'}}><blockquote>Top Hits </blockquote></div>
                    {secondCards.length>1 && secondCards}
                </div>
            </div>
            </div>
        )
    }
}

export default Albums