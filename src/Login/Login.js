import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        let url =
            'https://accounts.spotify.com/authorize' +
            '?response_type=token' +
            '&client_id=42f5250b17d5489d97142945731a6dbb' +
            '&scope=' +
            encodeURIComponent('user-read-private user-read-email') +
            '&redirect_uri=' +
            encodeURIComponent('http://localhost:3000/albums');

        window.location = url;

        return (
            <div>
                <a href='#!'><blockquote>Loggin in to spotify</blockquote></a>
            </div>
        )
    }
}