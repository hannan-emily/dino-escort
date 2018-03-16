import React from 'react';
import Signup from './Signup';
import Login from './Login';

export const Cart = props => {
  var dinosInCart = props.cart
  console.log(dinosInCart);
  var jsxDinos = dinosInCart.map(dino => {
    <div className='dinocard'>
      <h3 className='dinotitle'>{dino.name}</h3>
      <div className='dinoimage'>
        <img className='image' src='{dino.img_path}'/>
      </div>
    </div>
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
