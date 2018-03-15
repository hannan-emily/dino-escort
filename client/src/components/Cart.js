import React from 'react';
import Signup from './Signup';
import Login from './Login';

export const Cart = props => {
  var dinosInCart = props.cart
  console.log(dinosInCart);
  return(
    <div>
      <h1>This is Cart</h1>
    </div>
  )
}
