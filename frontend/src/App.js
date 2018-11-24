import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './Nav'
import Content from './Content'
import Footer from './Footer'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
