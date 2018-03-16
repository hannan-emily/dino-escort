import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom';

class Cart extends Component {
  constructor(props){
    super(props)
  }
  render(){
    var dinosInCart = this.props.cart
    console.log(dinosInCart);
    var jsxDinos = dinosInCart.map(dino => {
      return(
      <div className='dinocard'>
        <h3 className='dinotitle'>{dino.name}</h3>
        <p className='inline'>Cost: {dino.cost_hourly}/hour</p>
        <div className='dino-image'>
          <img className='image' src={dino.img_path}/>
        </div>
      </div>)
    })

    if(!dinosInCart){
      return(
        <div className='container'>
          <h1>Cart in empty</h1>
        </div>
      )
    } else {
      return(
        <div className='container'>
          <h1>You Have Selected</h1>
          {jsxDinos}

        
        </div>
      )
    }
  }
}
export default Cart
