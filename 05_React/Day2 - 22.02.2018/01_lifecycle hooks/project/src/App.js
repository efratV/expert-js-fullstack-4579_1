import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Pizza from './Pizza/Pizza';
import Chips from './Chips/Chips';

class App extends Component {

  tileChangeHandler = () => {
    this.setState({
      title: "New Title"
    });
  };


  tileNoChangeHandler = () => {
    this.setState({
      title: "DontChange"
    });
  };

  foodChoiceHandler = (str) => {
    this.setState({
      foodChoice:str
    });
  };

  //----------step 1--------
  //constructor
  constructor(props) {
    console.log("App Component constructor");
    super(props);
    this.state={
      title: "Default Title",
      foodChoice:"Pizza"
    }

  }


  //----------step 2--------
  componentWillMount() {
    console.log("App Component componentWillMount");
  }


  //----------step 3--------
  //----------step 7--------
  render() {
    return (
      <div>
        <h1> {this.state.title}</h1>

        {
          this.state.foodChoice==="Pizza"?
          <Pizza price={Math.floor(Math.random()*10+30)} />:
          <Chips price={Math.floor(Math.random()*20+10)} />
        }
        <button onClick={this.tileChangeHandler}>change title</button>
        <button onClick={this.tileNoChangeHandler}>dont change title</button>
        <button onClick={this.foodChoiceHandler.bind(this,"Pizza")}>pizza</button>
        <button onClick={this.foodChoiceHandler.bind(this,"Chips")}>chips</button>
      </div>
    );
  }


  //----------step 4--------
  componentDidMount() {
    console.log("App Component componentDidMount");

  }

  //----------lifecycle - step 5-------
  //gets executed right before a Component is updated in the DOM
  //can cancel the update by returning "false" value
  shouldComponentUpdate(nextProps, nextState) {
    console.log('App Component  Inside shouldComponentUpdate', nextProps, nextState);

    console.log('App Component  shouldComponentUpdate - this.state', this.state);
    console.log('App Component  shouldComponentUpdate - nextState', nextState);
    console.log('App Component  shouldComponentUpdate - nextProps', nextProps);
    return nextState.title !== "DontChange";
  }

  //----------lifecycle - step 6-------
  componentWillUpdate(nextProps, nextState) {
    console.log('App Component Inside componentWillUpdate', nextProps, nextState);
  }


  //----------lifecycle - step 8-------
  componentDidUpdate() {
    console.log('App Component Inside componentDidUpdate');
  }

  //----------lifecycle - step 9-------
  //gets executed right before a Component is removed from the DOM
  //Perform any cleanup work here
  componentWillUnmount() {
    console.log('App Component  about to be removed! - componentWillUnmount');
  }

}

export default App;
