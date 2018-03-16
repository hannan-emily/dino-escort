import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom';

class Congrats extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <h2>Congrats you checked out!</h2>
    )
  }
}

export default Congrats;
