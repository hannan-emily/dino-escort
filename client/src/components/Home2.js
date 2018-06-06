import React from 'react';
import Signup from './Signup';
import Login from './Login';

export const Home = props => {
  return(
    <div>
      <div className=''>
        <h1 className='home-title underline'>Welcome to Dino Escort</h1>
        <div className="signup">
          <Signup liftToken={props.liftToken} />
        </div>
        <div className="login">
          <Login liftToken={props.liftToken} />
        </div>
      </div>

    </div>
  )
}
