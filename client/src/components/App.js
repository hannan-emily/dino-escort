import React, { Component } from 'react';
import './App.css';
import {Home} from './Home';
import {Details} from './Details';
import {Cart} from './Cart';
import LandingPage from './LandingPage';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import {UserProfile} from './UserProfile';
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      token: '',
      user: {}
    }
    this.liftTokenToState = this.liftTokenToState.bind(this)
    this.logout = this.logout.bind(this)
  }

  liftTokenToState(data){
    console.log(data.user, data.token);
    this.setState({
      token: data.token,
      user:data.user
    })
  }

  logout(){
    console.log('logging out');
    localStorage.removeItem('mernToken')
    this.setState({token:'',user:{}})
  }

  componentDidMount() {
    var token = localStorage.getItem('mernToken')
    console.log(token);
    if(token === 'undefined' || token === 'null' || token === ''|| token === undefined){
      localStorage.removeItem('mernToken')
      this.setState({
        token:'',
        user:{}
      })
    } else {
      axios.post('/auth/me/from/token', {token}).then(result=>{
        localStorage.setItem('mernToken', result.data.token)
        this.setState({
          token: result.data.token,
          user: result.data.user
        })
      }).catch(error=>console.log(error))
    }
  }

  render() {
    let theUser = this.state.user
    if (typeof theUser === 'object' && Object.keys(theUser).length > 0){
      return(
        <div>
          <Router>
            <div>
              <nav className="nav">
                <Link className='linkstyle' to='/'>Landing Page</Link>
                <Link className='linkstyle' to="/cart">Cart</Link>
                <UserProfile user={theUser} logout={this.logout} />
              </nav>
              <Route exact path='/' component={LandingPage} />
              <Route path='/cart' component={Cart} />
            </div>
          </Router>
        </div>
      )
    } else {
      return (
        <div className="App">
          <Home liftToken={this.liftTokenToState} />
        </div>
      )
    }
  }
}

export default App;
