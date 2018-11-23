import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import insta from './images/instagram.png'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="welcome">
          <div className="photo"></div>
          <div className="title">
            <span className="blue-box">New </span>
            Website is coming soon ...
          </div>
        </div>
        <div className="object">
          <div>Scan this nametag on Instagram to <span> follow</span> me</div>
          <img src={insta} alt=""/>
        </div>
      </div>
    );
  }
}

export default App;
