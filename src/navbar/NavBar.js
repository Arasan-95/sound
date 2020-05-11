import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faShareAlt } from '@fortawesome/free-solid-svg-icons'
import M from 'materialize-css';
import Trevor from '../image/trevor_mcnevan.jpg'
import CoverImage from '../image/cover-1.jpg'
import { NavLink } from 'react-router-dom'

class NavBar extends Component{

    
    componentDidMount(){
        var sidenav = document.querySelector('.sidenav')
        M.Sidenav.init(sidenav)
    }
    
    render(){

        return (
            <div>
                <div className='navbar-fixed '>

                <nav className='transparent z-depth-0 '>
                    <div className='nav-wrapper ' style={{top:'0px'}}>
                        <a href='#!' className='brand-logo left' id='logo' style={{paddingLeft:'20px', color:'black'}}>Sound</a>
                        <a href='#!' className='sidenav-trigger right' data-target='mobile-nav'><i className='material-icons black-text'>menu</i></a>
                        <ul className='right hide-on-med-and-down' >
                            <li><a href='#home-1' style={{color:'black'}}>Home</a></li>
                            <li><a href='#home-2' style={{color:'black'}}>Music</a></li>
                            <li><a href='/login' style={{color:'black'}}>Albums</a></li>
                            <li><a target='_blank' href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Farasan-95.github.io%2Fsound%2F" style={{color:'black'}}><FontAwesomeIcon icon={faFacebook} /></a></li>
                            <li><a target='_blank' href="https://wa.me/9688296929?text=Welcome%20to%20the%20sound%20app" style={{color:'black'}}><FontAwesomeIcon icon={faWhatsapp} /></a></li>
                            <li><a target='_blank' href="mailto:chitrarasank@gmail.com?cc=secondemail@example.com, anotheremail@example.com, &bcc=lastemail@example.com&subject=Mail from our Website&body=Some body text here" style={{color:'black'}}><FontAwesomeIcon icon={faShareAlt} /></a></li>
                        </ul>
                    </div>
                </nav>
                </div>
                <ul id='mobile-nav' className='sidenav center sidenav-close' >
                    <li>
                        <div className='user-view'>
                            <div className='background'>
                                <img src={CoverImage} alt='navbarImage'></img>
                            </div>
                            <a href='#user'><img className='circle' src={Trevor} alt='sidenavImage'></img></a>
                            <a href='#name'><span className='white-text name'>Trevor</span></a>
                            <a href='#email'><span className='white-text email'>Trevor@thousandfoot.com</span></a>
                        </div>
                    </li>
                    <li><a className='active' href='#home-1'>Home</a></li>
                    <li><a href='#home-2'>Music</a></li>
                    <li><a href='/login'>Albums</a></li>
                    <li><a href='#!'>Contact</a></li>
                </ul>   
            </div>
         )
    }

}

export default NavBar