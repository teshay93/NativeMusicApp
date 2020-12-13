import React from 'react';
import PlayerControls from './PlayerControls';
import PlayerDetails from './PlayerDetails';

function Player(props) {
    return (
        <div>
            <audio></audio>
            <h4>Playing Now</h4>
            <PlayerDetails song={props.song}/>
            <PlayerControls />
            <h4>Next</h4>
        </div>
    )
};



export default Player
