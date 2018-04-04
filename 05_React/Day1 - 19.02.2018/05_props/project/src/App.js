import React, { Component } from 'react';
import './App.css';
import Pizza from './Pizza/Pizza';


//class style comonent
class App extends Component {
  render() {
    return (

       //jsx must return one root element
      <div className="App">
       <h1>Anna's Pizza</h1>
       <h2>{this.props.title}</h2>
       <Pizza price="60" slices="4" subTitle={this.props.title}/>
       <Pizza price="65" slices="6" >with two toppings!!</Pizza>
       <Pizza price="100" slices="8" />
      </div>
    );
  }
}

export default App;
