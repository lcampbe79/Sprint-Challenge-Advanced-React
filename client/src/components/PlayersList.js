import React from 'react';

const PlayersList = props => {
  console.log('PlayersList: props', props)
  return(
    <div>
      {props.players.map(player => 
        <h2 key={player.name}>{player.name}: {player.country}</h2>
      )}
    </div>
  )
}

export default PlayersList;