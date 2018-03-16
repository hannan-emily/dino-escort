import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom';

class Congrats extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div>
        <h2>Congrats you checked out!</h2>
        <h3>Make Sure you have the Gold to pay the escorts when they arrive!</h3>
      </div>
    )
  }
}

export default Congrats;
