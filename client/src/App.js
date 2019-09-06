import React from 'react';
import axios from 'axios';
import './App.css';

import PlayersList from './components/PlayersList.js'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      players: []
    }
  }
  
  componentDidMount() {
    axios
    .get('http://localhost:5000/api/players')
    .then(res => this.setState({players: res.data}))
    .catch(err => console.log('App.js: axios call: Server Error', err));
  }
  
  render() {
    // console.log(this.state)
    return (
      <div className="App">
        <PlayersList players={this.state.players} />
      </div>
    );
  }
}

export default App;
