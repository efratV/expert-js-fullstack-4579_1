import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Head from './Header/Header.js';
import Foot from './Footer/Footer';
import Main from './Main/Main';

class App extends Component {
  render() {
    return (
      //jsx - javascript xml

      <div className="App">

       
        <header className="App-header">
          <Head userName="Elijahu"/>
        </header>
        <main>
                <Main>Main section worked!!!</Main>
          </main>

        <Foot creator="moshiko"/>
      </div>
    );
  }
}

export default App;
