import React, { Component } from 'react';
import Signup from './Signup';
import Login from './Login';
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom';

class Details extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    if(this.props.redirect){
      return <Redirect to="/detail"/>
    }

    var dino = this.props.dino
    console.log(dino);
    if(dino === undefined || dino === 'undefined'){
      return(
      <div>
        <h1>No Dino Selected Bro!</h1>
      </div>
    )
    } else {
      return(
        <div>

          <div class="dino-div">

            <div className="dino-image2">
              <img className="image" src={this.props.dino.img_path} />
            </div>

            <div className="dino-content">
              <div className="dino-text">
                <h3>{this.props.dino.name}</h3>
                <p>{this.props.dino.text}</p>
              </div>

              <div className="dino-text">
                <h3>Capacity: {this.props.dino.capacity} people</h3>
                <h3>Cost: {this.props.dino.cost_hourly} / hour</h3>
              </div>
            </div>

            <input type="button" alt="submit" value="Book Now" onClick={(e)=>this.props.addToCart(e,dino)}/>


          </div>

        </div>
      )
    }
  }
}

export default Details;
