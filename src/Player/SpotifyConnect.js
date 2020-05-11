import React, {Component} from 'react';
import Spotify from 'spotify-web-api-js'

const spotifyClient = new Spotify();

class SpotifyConnect extends Component {

  audio = null
  constructor(){
    super();
    const params = this.getHashParams()
    this.state= {
        loggedIn: params.access_token!=null, 
        token: null,
         refreshToken: null,
         songs: []
    }

    if(params.access_token){
      spotifyClient.setAccessToken(params.access_token)
    }
  }
  
  componentDidMount(){
    this.audio = document.querySelector('.audio1')
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

  getCurrentlyPlaying=()=>{
    spotifyClient.searchTracks('Sad').then(response=>response.tracks.items.filter(el=>el.preview_url!=null))
    .then(sub=>sub.forEach(a=>{
        const {name, preview_url, album:{images} } = a
        console.log(name, preview_url, images[0])
        this.setState({
          songs:[...this.state.songs,{
            name: name,
            audioUrl: preview_url,
            imageUrl: images[0].url
          }]
        })
    }))

    console.log(this.state.songs)
  }
 
  play = () => {
    let audio =document.querySelector('.audio1')
    console.log(audio)
    audio.play();
  }

  render() {

    const mapped = this.state.songs!=null?(
      this.state.songs.map(item =>{
        return (
          <div className='row'>
            <div className='col s12 m4 l4'>
            <div className='card small'>
            <div className='card-image'>
              <img src={item.imageUrl}></img>
              <span className='card-title red'>{item.name}</span>
              <a href='#!' id='playbtn' onClick={this.play} 
              className="btn-floating halfway-fab green lighten-1 ">
              {this.state.playing==false?<i className='material-icons'>play_arrow</i>:
              <i className='material-icons'>pause</i>}</a>
            </div>
            <div className='card-content'>
              <audio className="audio1">
               <source src={item.audioUrl} type="audio/mpeg"/>
              </audio>
            </div>
          </div>
            </div>
          </div>
        )
      })
    ):'No data available';
   
    return (
      <div>
      <blockquote>Welcome </blockquote>
      <blockquote><a href='http://localhost:8888'>login</a></blockquote>
      <blockquote><a href='#!' onClick={this.getCurrentlyPlaying}>get-playing-song</a></blockquote>
      <p>{mapped}</p>
      </div>
    )
  }
}

export default SpotifyConnect;
