import React, { Component } from 'react'

class Footer extends Component {

    render() {
        return (
            <div>
                <footer className='page-footer white lighten-3'>
                    <div className='container' >
                        <div className='row'>
                            <div className='col s4' >
                                <ul>
                                    <li><a style={{ color: 'black' }} href='#!'>Home</a></li>
                                    <li><a style={{ color: 'black' }} href='#!'>Contact</a></li>
                                </ul>
                            </div>
                            <div className='col s4'>
                                <ul>
                                    <li><a style={{ color: 'black' }} href='#!'>Official</a></li>
                                    <li><a style={{ color: 'black' }} href='#!'>Subscription</a></li>
                                </ul>
                            </div>
                            <div className='col s4'>
                                <ul>
                                    <li><a style={{ color: 'black' }} href='#!'>News</a></li>
                                    <li><a style={{ color: 'black' }} href='#!'>Support</a></li>
                                </ul>
                            </div>
                        </div>
                        <span></span>
                    </div>
                    <div className='footer-copyright black-text' style={{fontSize:'12px'}} >
                        <p>©2020 SoundOfficial platform</p>
                    </div>
                </footer>

            </div>
        )
    }

}

export default Footer