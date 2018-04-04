import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {


    //js - not jsx
    /*
    React.createElement gets this 3 parameters:
    -------------------------------------------
     1) type: keyof ReactHTML,
     2) props?: ClassAttributes<T> & P,
     3) ...children: ReactNode[]

    */

        //father is div
        return React.createElement('div', 
        {className: 'App',style:{textAlign:'center'} }, 
        //first child
        React.createElement('p', {style:{fontSize:'4em'} }, 'Best Test Ever!'),

        //second child
        React.createElement('table', {border:"1" , style:{display:'inline-block'}},

            React.createElement('tbody', {style:{padding:'10px'}},
                //child 1 of second child
                React.createElement('tr', {style:{padding:'10px'} }, 
                    React.createElement('td', {style:{color:'red'} }, 'td 0,0'),
                    React.createElement('td', {style:{color:'red'} }, 'td 0,1')),

                //child 2 of second child
                React.createElement('tr', {style:{padding:'10px'} }, 
                    //childs of child of second child
                    React.createElement('td', {style:{color:'blue'} }, 'td 1,0'),
                    React.createElement('td', {style:{color:'green'} }, 'td 1,1')) 
      )));
  }
}

export default App;
