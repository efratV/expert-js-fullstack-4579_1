import React, { Component } from 'react';

class Chips extends Component {


  //----------step 1--------
  //constructor
  constructor(props){
    console.log("Chips Component constructor");
    super(props);
   
  }


  //----------step 2--------
  componentWillMount(){
    console.log("Chips Component componentWillMount");
  }


  //----------step 3--------
  //----------step 7--------
  render() {
    return (
      <div>
          <h1>Chips price: {this.props.price}</h1>
      </div>
    );
  }


   //----------step 4--------
   componentDidMount(){
    console.log("Chips Component componentDidMount");

  }

  //----------lifecycle - step 5-------
  //gets executed right before a Component is updated in the DOM
  //can cancel the update by returning "false" value
  shouldComponentUpdate(nextProps, nextState) {
    console.log('Chips Component  Inside shouldComponentUpdate',nextProps, nextState);
    return true;
  }

  //----------lifecycle - step 6-------
  componentWillUpdate(nextProps, nextState) {
    console.log('Chips Component Inside componentWillUpdate', nextProps, nextState);
  }


  //----------lifecycle - step 8-------
  componentDidUpdate() {
    console.log('Chips Component Inside componentDidUpdate');
  }

  //----------lifecycle - step 9-------
  //gets executed right before a Component is removed from the DOM
  //Perform any cleanup work here
  componentWillUnmount() {
    console.log('Chips Component  about to be removed! - componentWillUnmount');
  }

}

export default Chips;
