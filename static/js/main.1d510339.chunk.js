(this.webpackJsonpsound=this.webpackJsonpsound||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/image-4.c8bd82aa.jpg"},,function(e,t,a){e.exports=a.p+"static/media/trevor_mcnevan.b301f18e.jpg"},,,,,,,,,,function(e,t,a){},,,,,function(e,t,a){e.exports=a.p+"static/media/cover-1.73262b02.jpg"},function(e,t,a){e.exports=a.p+"static/media/image-2.5b042289.jpg"},function(e,t,a){e.exports={songs:[{id:"one",title:"ALL I NEED",cover:a(48),src:a(49)},{id:"two",title:"BIG LOVE",cover:a(50),src:a(51)},{id:"three",title:"FADED",cover:a(52),src:a(53)},{id:"four",title:"LOST YOU",cover:a(54),src:a(55)},{id:"five",title:"NEED YOU",cover:a(56),src:a(57)},{id:"six",title:"FAR GONE",cover:a(58),src:a(59)},{id:"seven",title:"HOLD ON",cover:a(60),src:a(61)},{id:"eight",title:"STUCK IN HEAD",cover:a(62),src:a(63)}]}},,,function(e,t,a){e.exports=a(65)},,,,,function(e,t,a){},,,,,,function(e,t,a){e.exports=a.p+"static/media/all-i-need.4231d605.jpg"},function(e,t,a){e.exports=a.p+"static/media/AllINeed.7743ef23.mp3"},function(e,t,a){e.exports=a.p+"static/media/big-love.f346ae93.jpg"},function(e,t,a){e.exports=a.p+"static/media/BigLove.209f18d3.mp3"},function(e,t,a){e.exports=a.p+"static/media/faded.4afed9b9.jpg"},function(e,t,a){e.exports=a.p+"static/media/Faded.66b16427.mp3"},function(e,t,a){e.exports=a.p+"static/media/lost-you.42cda350.jpg"},function(e,t,a){e.exports=a.p+"static/media/LostYou.6fd3ffe8.mp3"},function(e,t,a){e.exports=a.p+"static/media/lp-laura.a01499e7.jpg"},function(e,t,a){e.exports=a.p+"static/media/LostOnYou.9a16a988.mp3"},function(e,t,a){e.exports=a.p+"static/media/so-far-gone.f5541cd6.jpg"},function(e,t,a){e.exports=a.p+"static/media/FarGone.1331b8a5.mp3"},function(e,t,a){e.exports=a.p+"static/media/hold-on.2a184b94.jpg"},function(e,t,a){e.exports=a.p+"static/media/HoldOn.de03cc28.mp3"},function(e,t,a){e.exports=a.p+"static/media/mosters.435b457e.jpg"},function(e,t,a){e.exports=a.p+"static/media/Monsters.bc69f397.mp3"},,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(29),l=a.n(c),o=(a(42),a(27),a(20)),i=a(12),s=a(25),m=a(4),d=a(5),u=a(7),p=a(6),h=a(30),f=a.n(h),E=a(2),v=a.n(E),g=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).title=e.props.data.title,e.cover=e.props.data.cover,e.albumId=e.props.data.id,e.songSrc=e.props.data.src,e.audio=null,e.progress=null,e.forward=null,e.audioAnchor=null,e.state={playing:!1,progressStyle:{width:1},duration:"00:00"},e.play=function(){e.audio.play(),e.setState({playing:!0})},e.pause=function(){e.audio.pause(),e.setState({playing:!1})},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.audio=document.querySelector(".aud."+this.albumId),this.progress=document.querySelector(".progress.green."+this.albumId),this.forward=document.querySelector(".forward."+this.albumId),this.backward=document.querySelector(".backward."+this.albumId),this.audioAnchor=document.querySelector(".audioAnchor"),v()(window).on("scroll",(function(){var e=v()(".audioAnchor").offset().top,t=v()(".audioAnchor").outerHeight(),a=v()(window).height(),n=v()(this).scrollTop(),r=document.querySelectorAll(".audioAnchor");n>e+t-a-400?r.forEach((function(e){e.classList.add("animated","slideInUp")})):r.forEach((function(e){e.classList.remove("animated","slideInUp")}))})),this.backward.addEventListener("click",(function(){if(e.audio.currentTime>0){e.audio.currentTime=e.audio.currentTime-10;var t=e.audio.currentTime/e.audio.duration*100,a=parseInt(e.audio.duration/60,10)+":"+parseInt(e.audio.duration%60),n=Math.floor(e.audio.currentTime/60)+":"+Math.floor(e.audio.currentTime%60);e.setState({progressStyle:{width:t},duration:n+"/"+a})}})),this.forward.addEventListener("click",(function(){e.audio.currentTime=e.audio.currentTime+10;var t=e.audio.currentTime/e.audio.duration*100,a=parseInt(e.audio.duration/60,10),n=parseInt(e.audio.duration%60),r=Math.floor(e.audio.currentTime/60),c=Math.floor(e.audio.currentTime%60),l=a+":"+n,o=r+":"+c;console.log(r,c),e.setState({progressStyle:{width:t},duration:o+"/"+l})})),document.querySelector(".restorebtn."+this.albumId).addEventListener("click",(function(){e.audio.currentTime=0,e.setState({progressStyle:{width:1},duration:"00::00"})})),this.audio.addEventListener("timeupdate",(function(){var t=parseInt(e.audio.duration/60,10)+":"+parseInt(e.audio.duration%60),a=Math.floor(e.audio.currentTime/60)+":"+Math.floor(e.audio.currentTime%60),n=Math.round(e.audio.currentTime)/e.audio.duration*100;e.setState({duration:a+"/"+t}),n>=1&&e.setState({progressStyle:{width:n}})}),!0)}},{key:"render",value:function(){return r.a.createElement("div",{className:"col s12 m6 l3 audioAnchor",id:this.albumId},r.a.createElement("div",{className:"card z-depth-1 ",style:{transform:"translateX(0px)",opacity:1}},r.a.createElement("div",{className:"card-image"},r.a.createElement("img",{src:this.cover,alt:"coverImage"}),r.a.createElement("span",{style:{fontFamily:" 'Barlow', sans-serif",padding:"0px",fontSize:"inherit"},className:"card-title"},this.title),r.a.createElement("a",{href:"#!",id:"playbtn",onClick:0==this.state.playing?this.play:this.pause,className:"btn-floating halfway-fab green lighten-1 "},0==this.state.playing?r.a.createElement("i",{className:"material-icons"},"play_arrow"):r.a.createElement("i",{className:"material-icons"},"pause"))),r.a.createElement("div",{className:"card-content center-align ",style:{paddingBottom:"5px"}},r.a.createElement("div",{className:"row",id:"player"},r.a.createElement("div",{className:"col s12 m12 l12"},r.a.createElement("div",{className:"col s4"},r.a.createElement("a",{href:"#!",className:"black-text restorebtn "+this.albumId},r.a.createElement("i",{className:"material-icons"},"restore"))),r.a.createElement("div",{className:"col s4"},r.a.createElement("a",{href:"#!",className:"black-text backward "+this.albumId},r.a.createElement("i",{className:"material-icons"},"fast_rewind"))),r.a.createElement("div",{className:"col s4"},r.a.createElement("a",{href:"#!",className:"black-text forward "+this.albumId},r.a.createElement("i",{className:"material-icons"},"fast_forward"))),r.a.createElement("span",{className:"right"},this.state.duration),r.a.createElement("progress",{className:"progress green "+this.albumId,max:"100",value:this.state.progressStyle.width}))))),r.a.createElement("audio",{className:"aud "+this.albumId,src:this.songSrc}))}}]),a}(n.Component),b=a(11),y=a(22),k=a(13),w=a(31),x=a.n(w),N=a(17),S=a.n(N),j=a(32),I=a.n(j),O=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=document.querySelector(".sidenav");x.a.Sidenav.init(e)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"navbar-fixed "},r.a.createElement("nav",{className:"transparent z-depth-0 "},r.a.createElement("div",{className:"nav-wrapper ",style:{top:"0px"}},r.a.createElement("a",{href:"#!",className:"brand-logo left",id:"logo",style:{paddingLeft:"20px",color:"black"}},"Sound"),r.a.createElement("a",{href:"#!",className:"sidenav-trigger right","data-target":"mobile-nav"},r.a.createElement("i",{className:"material-icons black-text"},"menu")),r.a.createElement("ul",{className:"right hide-on-med-and-down"},r.a.createElement("li",null,r.a.createElement("a",{href:"#home-1",style:{color:"black"}},"Home")),r.a.createElement("li",null,r.a.createElement("a",{href:"#home-2",style:{color:"black"}},"Music")),r.a.createElement("li",null,r.a.createElement("a",{href:"/sound/#/login",style:{color:"black"}},"Albums")),r.a.createElement("li",null,r.a.createElement("a",{target:"_blank",href:"https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Farasan-95.github.io%2Fsound%2F",style:{color:"black"}},r.a.createElement(b.a,{icon:y.a}))),r.a.createElement("li",null,r.a.createElement("a",{target:"_blank",href:"https://wa.me/9688296929?text=Welcome%20to%20the%20sound%20app",style:{color:"black"}},r.a.createElement(b.a,{icon:y.b}))),r.a.createElement("li",null,r.a.createElement("a",{target:"_blank",href:"mailto:chitrarasank@gmail.com?cc=secondemail@example.com, anotheremail@example.com, &bcc=lastemail@example.com&subject=Mail from our Website&body=Some body text here",style:{color:"black"}},r.a.createElement(b.a,{icon:k.e}))))))),r.a.createElement("ul",{id:"mobile-nav",className:"sidenav center sidenav-close"},r.a.createElement("li",null,r.a.createElement("div",{className:"user-view"},r.a.createElement("div",{className:"background"},r.a.createElement("img",{src:I.a,alt:"navbarImage"})),r.a.createElement("a",{href:"#user"},r.a.createElement("img",{className:"circle",src:S.a,alt:"sidenavImage"})),r.a.createElement("a",{href:"#name"},r.a.createElement("span",{className:"white-text name"},"Trevor")),r.a.createElement("a",{href:"#email"},r.a.createElement("span",{className:"white-text email"},"Trevor@thousandfoot.com")))),r.a.createElement("li",null,r.a.createElement("a",{className:"active",href:"#home-1"},"Home")),r.a.createElement("li",null,r.a.createElement("a",{href:"#home-2"},"Music")),r.a.createElement("li",null,r.a.createElement("a",{href:"/login"},"Albums")),r.a.createElement("li",null,r.a.createElement("a",{href:"#!"},"Contact"))))}}]),a}(n.Component),T=a(15),A=a.n(T),L=new f.a,M=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(m.a)(this,a),(e=t.call(this)).audio=null,e.getHashParams=function(){for(var e,t={},a=/([^&;=]+)=?([^&;]*)/g,n=window.location.hash.substring(1);e=a.exec(n);)t[e[1]]=decodeURIComponent(e[2]);return t};var n=e.getHashParams();return e.state={loggedIn:!1,token:null,refreshToken:null,recommendedSongs:[],list2:[]},n.access_token&&L.setAccessToken(n.access_token),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.audio=document.querySelector(".audio1"),L.searchTracks("ALL").then((function(e){return e.tracks.items.filter((function(e){return null!=e.preview_url}))})).then((function(t){return t.forEach((function(t){var a=t.external_ids.isrc,n=t.name,r=t.preview_url,c=t.album.images;e.setState({recommendedSongs:[].concat(Object(s.a)(e.state.recommendedSongs),[{id:a,title:n,src:r,cover:c[0].url}])})}))})),L.searchTracks("You").then((function(e){return e.tracks.items.filter((function(e){return null!=e.preview_url}))})).then((function(t){return t.forEach((function(t){var a=t.external_ids.isrc,n=t.name,r=t.preview_url,c=t.album.images;e.setState({list2:[].concat(Object(s.a)(e.state.list2),[{id:a,title:n,src:r,cover:c[0].url}])})}))}))}},{key:"render",value:function(){var e={width:"100%",height:"100%",backgroundImage:"url(".concat(A.a,")"),backgroundPosition:"center",backgroundAttachment:"fixed",backgroundRepeat:"no-repeat",backgroundSize:"cover"},t=this.state.recommendedSongs.length>0&&this.state.recommendedSongs.map((function(e){return r.a.createElement(g,{className:"transparent",data:e,key:e.id})})),a=this.state.list2.length>0&&this.state.list2.map((function(e){return r.a.createElement(g,{className:"transparent",data:e,key:e.id})}));return r.a.createElement("div",{id:"#albums",style:e},r.a.createElement("div",{className:"container",style:{marginTop:"0px"}},r.a.createElement("div",{className:"row"},r.a.createElement("div",{style:{margin:"0px",padding:"20px"}},r.a.createElement("blockquote",null,"Trending ")),t.length>1&&t),r.a.createElement("div",{className:"row",style:{marginBottom:"0px"}},r.a.createElement("div",{style:{margin:"0px",padding:"20px"}},r.a.createElement("blockquote",null,"Top Hits ")),a.length>1&&a)))}}]),a}(n.Component),q=a(33),_=a.n(q),z=a(18);var C=function(){var e={fontSize:"50px"};v()(window).on("scroll",(function(){var e=v()("#home-2").offset().top,t=v()("#home-2").outerHeight(),a=v()(window).height(),n=v()(this).scrollTop(),r=document.querySelectorAll(".homecard2");n>e+t-a-400?r.forEach((function(e){e.classList.add("animated","slideInUp")})):r.forEach((function(e){e.classList.remove("animated","slideInUp")}))}));var t=Object(z.useMediaQuery)({maxDeviceWidth:600});function a(e){return!1===t?{paddingTop:e}:{paddingTop:"30px",height:"300px"}}return r.a.createElement("div",null,r.a.createElement("div",{className:"row white-text",style:{marginTop:"0px",marginBottom:"0px"},id:"home-2"},r.a.createElement("div",{className:"col s12 m3 homecard2",style:a("300px")},r.a.createElement("div",{className:"card medium center transparent z-depth-0"},r.a.createElement("div",{className:"card-title "},r.a.createElement(b.a,{icon:k.d,style:e}),r.a.createElement("div",{className:"card-title white-text"},"Play")),r.a.createElement("div",{className:"card-content"},r.a.createElement("span",null,"List of Songs That you will obssesively Listened To.We are stepping in to creating highly curated lists of songs")))),r.a.createElement("div",{className:"col s12 m3 homecard2",style:a("140px")},r.a.createElement("div",{className:"card medium center transparent z-depth-0"},r.a.createElement("div",{className:"card-title"},r.a.createElement(b.a,{icon:k.a,style:e}),r.a.createElement("div",{className:"card-title white-text"},"Favourite")),r.a.createElement("div",{className:"card-content"},r.a.createElement("span",null,"Behind every favourite song There is an Untold story. Whats your favourite song ! ")))),r.a.createElement("div",{className:"col s12 m3 homecard2",style:a("350px")},r.a.createElement("div",{className:"card medium center transparent z-depth-0"},r.a.createElement("div",{className:"card-title"},r.a.createElement(b.a,{icon:k.c,style:e}),r.a.createElement("div",{className:"card-title white-text"},"Quality")),r.a.createElement("div",{className:"card-content"},r.a.createElement("span",null,"Experience the classic song collection with high definition sound quality like never before ")))),r.a.createElement("div",{className:"col s12 m3 homecard2",style:a("250px")},r.a.createElement("div",{className:"card medium center transparent z-depth-0"},r.a.createElement("div",{className:"card-title"},r.a.createElement(b.a,{icon:k.b,style:e}),r.a.createElement("div",{className:"card-title white-text"},"Videos")),r.a.createElement("div",{className:"card-content"},r.a.createElement("span",null,"More curious to watch the video of your favourite song We got you !"))))))},B=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).rowStyle={marginBottom:"0px"},e.bigIcon={fontSize:"50px"},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){v()(window).on("scroll",(function(){var e=v()("#home-1").offset().top,t=v()("#home-1").outerHeight(),a=v()(window).height(),n=v()(this).scrollTop(),r=document.querySelector(".homecard");n>e+t-a-400?r.classList.add("animated","slideInUp"):r.classList.remove("animated","slideInUp")}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"row white-text",style:this.rowStyle,id:"home-1"},r.a.createElement("div",{className:"col s12 m6 offset-m2",style:{paddingTop:"150px",paddingBottom:"50px"}},r.a.createElement("div",{className:"homecard card medium center transparent z-depth-1"},r.a.createElement("div",{className:"card-title"},r.a.createElement("img",{style:{maxWidth:"70px",height:"auto",objectFit:"contain"},src:S.a,className:"circle",alt:"homeImage"}),r.a.createElement("div",{className:"black-text text-darken-5 top"},"Trever McNevan")),r.a.createElement("div",{className:"card-content black-text left-align"},r.a.createElement("blockquote",null,"Music drives you. It wakes you up. And, at the end of the day, the correct tune will chill you down "),r.a.createElement("blockquote",null,"Without language; it was below and before speech, and it is above and beyond all words"),r.a.createElement("div",{className:"center"},r.a.createElement("a",{href:"#audio-grid",className:"btn black-text transparent"},"Playlist"))))))}}]),a}(n.Component),U=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("footer",{className:"page-footer white lighten-3"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s4"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{style:{color:"black"},href:"#home-1"},"Home")),r.a.createElement("li",null,r.a.createElement("a",{style:{color:"black"},href:"#!"},"Contact")))),r.a.createElement("div",{className:"col s4"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{style:{color:"black"},href:"#!"},"Official")),r.a.createElement("li",null,r.a.createElement("a",{style:{color:"black"},href:"#!"},"Subscription")))),r.a.createElement("div",{className:"col s4"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{style:{color:"black"},href:"#!"},"News")),r.a.createElement("li",null,r.a.createElement("a",{style:{color:"black"},href:"#!"},"Support"))))),r.a.createElement("span",null)),r.a.createElement("div",{className:"footer-copyright black-text",style:{fontSize:"12px"}},r.a.createElement("p",null,"\xa92020 SoundOfficial platform"))))}}]),a}(n.Component),D=a(34),H=a.n(D),F=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var e={width:"100%",height:"100%",backgroundImage:"url(".concat(A.a,")"),backgroundPosition:"center",backgroundAttachment:"fixed",backgroundRepeat:"no-repeat",backgroundSize:"cover"},t=H.a.songs.map((function(e){return r.a.createElement(g,{data:e,key:e.title})}));return r.a.createElement("div",{style:e},r.a.createElement("div",{className:"container",id:"audio-grid",style:{marginTop:"0px",marginBottom:"0px"}},r.a.createElement("div",{style:{margin:"0px",padding:"20px"}},r.a.createElement("blockquote",null,"Recommended ")),r.a.createElement("div",{className:"row",style:{marginBottom:"0px"}},t)))}}]),a}(n.Component);var W=function(){var e=Object(z.useMediaQuery)({maxDeviceWidth:600}),t={width:"100%",height:"100%",backgroundImage:"url(".concat(A.a,")"),backgroundPosition:"center",backgroundAttachment:0==e?"fixed":"scroll",backgroundRepeat:"no-repeat",backgroundSize:"cover"},a={width:"100%",height:"100%",backgroundImage:"url(".concat(_.a,")"),backgroundPosition:"center",backgroundAttachment:0==e?"fixed":"scroll",backgroundRepeat:"no-repeat",backgroundSize:"cover"};return r.a.createElement("div",null,r.a.createElement("div",{style:t},r.a.createElement(O,null),r.a.createElement(B,null)),r.a.createElement("div",{style:a},r.a.createElement(C,null)),r.a.createElement("div",null,r.a.createElement(F,null)),r.a.createElement("div",null))},R=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var e="https://accounts.spotify.com/authorize?response_type=token&client_id=42f5250b17d5489d97142945731a6dbb&scope="+encodeURIComponent("user-read-private user-read-email")+"&redirect_uri="+encodeURIComponent("https://arasan-95.github.io/sound/#/albums");return window.location=e,r.a.createElement("div",null,r.a.createElement("a",{href:"#!"},r.a.createElement("blockquote",null,"Loggin in to spotify")))}}]),a}(n.Component);var P=function(){return console.log("/sound"),r.a.createElement("div",null,r.a.createElement(W,null),r.a.createElement(o.a,{basename:"/sound"},r.a.createElement(i.a,{path:"/albums",component:M}),r.a.createElement(i.a,{path:"/login",component:R}),r.a.createElement(i.a,{path:"/login",component:R})),r.a.createElement("section",{className:"divider"}),r.a.createElement(U,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[37,1,2]]]);
//# sourceMappingURL=main.1d510339.chunk.js.map