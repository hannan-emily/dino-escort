import React from 'react';
import Signup from './Signup';
import Login from './Login';

export const UserProfile = props => {
  return(
    <div>
      <h1>Welcome to Dino Escort</h1>
      <div className="signup">
        <Signup liftToken={props.liftToken} />
      </div>
      <div className="login">
        <Login liftToken={props.liftToken} />
      </div>
    </div>
  )
}
