import React from 'react';


export const Cart = props => {
  var dinosInCart = props.cart
  console.log(dinosInCart);
  var jsxDinos = dinosInCart.map(dino => {
    return(
    <div className='dinocard'>
      <h3 className='dinotitle'>{dino.name}Working?</h3>
      <div className='dinoimage'>
        <img className='cart-image' src={dino.img_path}/>
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
        <h1 className="h1-white">You Have Selected</h1>
        {jsxDinos}
      </div>
    )
  }
}
