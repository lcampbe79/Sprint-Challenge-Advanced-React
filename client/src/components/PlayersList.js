import React from 'react';
import { Card, Icon } from 'semantic-ui-react';

const PlayersList = props => {
  console.log('PlayersList: props', props)
  

  return(
    <div className='playerListCard'>
        {props.players.map(player =>
          <Card key={player.id}>  
            <Card.Content header={player.name} />
            <Card.Content description={player.country} />
            <Card.Content extra>
              <Icon name='search' /> {player.searches} Searches
            </Card.Content>
          </Card>
        )}
    </div>
  )
}

export default PlayersList;