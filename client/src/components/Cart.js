import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import Congrats from './Congrats'

import 'react-datepicker/dist/react-datepicker.css';


class Cart extends Component {
  constructor(props){
    super(props)
    this.state = {
      startDate: moment()
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  render(){
    var dinosInCart = this.props.cart
    console.log(dinosInCart);
    console.log(this.props.congrats);
    var jsxDinos = dinosInCart.map((dino,index)=> {
      return(
      <div key={index} className='dinocard'>
        <h3 className='dinotitle'>{dino.name}</h3>
        <button onClick={e=>this.props.removeFromCart(e,index)}>Remove From Cart</button>
        <p className='inline'>Cost: {dino.cost_hourly}/hour</p>
        <div className='dino-image'>
          <img className='image' src={dino.img_path}/>
        </div>
      </div>)
    })

    if(dinosInCart === []){
      return(
        <div className='container'>
          <h1>Cart in empty</h1>
        </div>
      )
    } else {
      if(this.props.congrats){
        return(
          <div>
            <Congrats />
          </div>
        )
      } else {
        return(
          <div className='container'>
            <h1>You Have Selected</h1>
            {jsxDinos}

            <div>
              <DatePicker
                selected={this.state.startDate}
                onChange={this.handleChange}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                dateFormat="LLL"
                timeCaption="time"
              />
              <button type="submit" onClick={this.props.bookClick}>Book All In Cart!</button>
            </div>
          </div>
        )
      }
    }
  }
}
export default Cart
