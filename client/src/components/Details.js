import React from 'react';
import Signup from './Signup';
import Login from './Login';

export const Details = props => {
  var dino = props.dino
  console.log(dino);
  if(dino === undefined || dino === 'undefined'){
    return(
      <div>
        <h1>Nothing in your cart</h1>
      </div>
    )
  } else {
    return(
      <div>
        <h1>Dino cart isn't emlty brah!</h1>
      </div>
    )
  }

}
