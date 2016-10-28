import React, { Component } from 'react';
import Header from './Layout/Header';
import Body from './Layout/Body';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Body/>
      </div>
    );
  }
}

export default App;
