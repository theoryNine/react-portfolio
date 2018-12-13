import React, { Component } from 'react';
import './App.scss';
import { Hero } from './components/Hero/Hero.js';
import { Nav } from './components/Nav/Nav.js';
export class App extends Component {
  render() {
    return (
      <div className="App">
        <Hero 
          name="Ansel Colvin" 
          job="Front End Developer" 
          buttonUrl="#" 
          buttonLabel="Button"
          headerClasses="cursive" 
        />
        <Nav />
      </div>
    );
  }
}