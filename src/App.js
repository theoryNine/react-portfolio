import React, { Component } from 'react';
import './App.scss';
import { Hero } from './components/Hero/Hero.js';
import { Nav } from './components/Nav/Nav.js';
import { About } from './components/About/About.js';
import { Skills } from './components/Skills/Skills.js'
import { Projects } from './components/Projects/Projects.js';
import { Contact } from './components/Contact/Contact.js';
import { Footer } from './components/Footer/Footer.js';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Hero />
        <Nav />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    );
  }
}