import React from 'react'
function Player() {

    return (
        <div className='row' id='player'>
            <div className='col s12 m12 l12'>
                <div className='col s4'><a href='#!' className='black-text '><i className='material-icons' >skip_previous</i></a></div>
                <div className='col s4'><a href='#!' className='black-text '><i className='play material-icons' >play_arrow</i></a></div>
                <div className='col s4'><a href='#!' className='black-text '><i className='material-icons' >skip_next</i></a></div>
                <div className='col s12'><input type='range' /></div>
            </div>
        </div>

    );
}

export default Player