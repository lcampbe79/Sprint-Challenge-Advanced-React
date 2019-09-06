import React from 'react';
import axios from 'axios';
import './App.css';


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
    
console.log(this.state)
    return (
      <div className="App">
      
      </div>
    );
  }
}

export default App;
