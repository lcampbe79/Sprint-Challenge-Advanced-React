import React from 'react';
import { Card, Icon } from 'semantic-ui-react';

const PlayersList = props => {
  // console.log('PlayersList: props', props)
  return(
    <div>
        {props.players.map(player =>
          <Card key={player.id}>  
            <Card.Content header={player.name} />
            <Card.Content description={player.country} />
            <Card.Content extra>
              <Icon name='search' />{player.searches} Searches
            </Card.Content>
          </Card>
        )}
      {/* {props.players.map(player => 
        <h2 key={player.name}>{player.name}: {player.country} Searches: {player.searches}</h2>
      )} */}
    </div>
  )
}

export default PlayersList;