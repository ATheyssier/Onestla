import React, { Component } from 'react';
import logo from './lolol.png';
import './App.css';

class App extends Component {
    state = {
      characters: []
    }

  constructor() {
    super()


    const id = Math.floor(Math.random() * 89)

    fetch(`https://cdn.rawgit.com/akabab/starwars-api/0.2.1/api/id/${id}.json`)
    .then(res => res.json())
    .then(characters => {
      this.setState({ characters: characters })
    })
}


  render() {
    const characters = this.state.characters

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Dongeons & Dragows<br/>Homepage</h1>
        </header>
        <p className="App-intro">
          Ceci est une utilisation <b><a href="http://www.silverraven.com/fy.htm" target="_blank">optimale</a></b> de l'API.
        </p>
        <p className="App-intro2">
          Un fetch et rien d'autre
        </p>
          <div className='LaRep'>
            <p className='LaDesc'>{characters.name}</p>
            <img width="200px" src={characters.image} alt="C bo" id="laImage"></img>
            <p className='LaDesc'>{characters.homeworld}</p>
          </div>
      </div>

    );
  }
}

export default App;
