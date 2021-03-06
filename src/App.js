import React, { Component } from 'react';
import logo from './logo_w.png';
import './App.css';
import Task1 from './Task1'
import Task2 from './Task2'


class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="logo">
          <img src={logo} alt="This must be img" />
          <a href="#" target="_self" >Home link  </a>
          <a href="https://pixelplex.io" target="_blank">Pixel link </a>
        </div>
        <div className="task1header border">Task#1</div>
        <div className="border task1content">
          <Task1 ></Task1></div>
        <div className="task2header border">Task#2</div>
        <div className="task2content border">
          <Task2></Task2>
        </div>
      </div>
    )
  }
}

export default App; 