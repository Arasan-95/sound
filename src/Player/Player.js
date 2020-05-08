import React from 'react'

function Player() {

    return (
        <div class='row'>
            <div className='col s12 m12 l12'>
                <div className='col s4'><i className='material-icons' >skip_previous</i></div>
                <div className='col s4'><i className='material-icons' >play_arrow</i></div>
                <div className='col s4'><i className='material-icons' >skip_next</i></div>
                <div className='col s12'><input type='range' /></div>
            </div>
        </div>

    );
}

export default Player