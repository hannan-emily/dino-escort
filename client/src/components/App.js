import React, { Component } from 'react';
import './App.css';
import {Home} from './Home';
import {Details} from './Details';
import {Cart} from './Cart';
import LandingPage from './LandingPage';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import {UserProfile} from './UserProfile';
import axios from 'axios';

var dinos = {
   dino1:{
    name: "Irritator Challengeri",
    category: "land",
    img_path: "../img/dino-irritator-challengeri.png",
    img_headshot_path: "",
    text: "Banjo unicorn butcher pabst venmo jianbing, williamsburg wolf vegan dreamcatcher cornhole master cleanse fixie. Tilde brooklyn taiyaki 8-bit, skateboard cronut post-ironic pok pok. Schlitz post-ironic normcore green juice chartreuse, pop-up polaroid food truck squid sriracha fingerstache la croix salvia.",
    capacity : "5",
    cost_hourly: "$50"
  },

   dino2:{
    name: "Oxalaia Quilombensis",
    category: "land",
    img_path: "../img/dino-oxalaia.png",
    img_headshot_path: "",
    text: "Banjo unicorn butcher pabst venmo jianbing, williamsburg wolf vegan dreamcatcher cornhole master cleanse fixie. Tilde brooklyn taiyaki 8-bit, skateboard cronut post-ironic pok pok. Schlitz post-ironic normcore green juice chartreuse, pop-up polaroid food truck squid sriracha fingerstache la croix salvia.",
    capacity : "15",
    cost_hourly: "$75"
  },

   dino3:{
    name: "Spinosaurus Aegyptiacus",
    category: "land",
    img_path: "../img/dino-spinosaurs.png",
    img_headshot_path: "",
    text: "Banjo unicorn butcher pabst venmo jianbing, williamsburg wolf vegan dreamcatcher cornhole master cleanse fixie. Tilde brooklyn taiyaki 8-bit, skateboard cronut post-ironic pok pok. Schlitz post-ironic normcore green juice chartreuse, pop-up polaroid food truck squid sriracha fingerstache la croix salvia.",
    capacity: "30",
    cost_hourly: "$120"
  },

   dino4:{
    name: "Nyctosaurus",
    category: "air",
    img_path: "../img/dino-nyctosaurus.png",
    img_headshot_path: "",
    text: "Banjo unicorn butcher pabst venmo jianbing, williamsburg wolf vegan dreamcatcher cornhole master cleanse fixie. Tilde brooklyn taiyaki 8-bit, skateboard cronut post-ironic pok pok. Schlitz post-ironic normcore green juice chartreuse, pop-up polaroid food truck squid sriracha fingerstache la croix salvia.",
    capacity : "1",
    cost_hourly: "$20"
  },

   dino5:{
    name: "Pterodaustro",
    category: "air",
    img_path: "../img/dino-pterodaustro.png",
    img_headshot_path: "",
    text: "Banjo unicorn butcher pabst venmo jianbing, williamsburg wolf vegan dreamcatcher cornhole master cleanse fixie. Tilde brooklyn taiyaki 8-bit, skateboard cronut post-ironic pok pok. Schlitz post-ironic normcore green juice chartreuse, pop-up polaroid food truck squid sriracha fingerstache la croix salvia.",
    capacity : "2",
    cost_hourly: "$40"
  },

   dino6:{
    name: "Pteranodon",
    category: "air",
    img_path: "../img/dino-pteranodon.png",
    img_headshot_path: "",
    text: "Banjo unicorn butcher pabst venmo jianbing, williamsburg wolf vegan dreamcatcher cornhole master cleanse fixie. Tilde brooklyn taiyaki 8-bit, skateboard cronut post-ironic pok pok. Schlitz post-ironic normcore green juice chartreuse, pop-up polaroid food truck squid sriracha fingerstache la croix salvia.",
    capacity: "2",
    cost_hourly: "$40"
  },

   dino7:{
    name: "Shastasaurus Pacificus",
    category: "water",
    img_path: "../img/dino-shastasaurus.png",
    img_headshot_path: "",
    text: "Banjo unicorn butcher pabst venmo jianbing, williamsburg wolf vegan dreamcatcher cornhole master cleanse fixie. Tilde brooklyn taiyaki 8-bit, skateboard cronut post-ironic pok pok. Schlitz post-ironic normcore green juice chartreuse, pop-up polaroid food truck squid sriracha fingerstache la croix salvia.",
    capacity: "100",
    cost_hourly: "$300"
  },

   dino8:{
    name: "Opthalmusarus Iceniucs",
    category: "water",
    img_path: "../img/dino-opthalmusaurus.png",
    img_headshot_path: "",
    text: "Banjo unicorn butcher pabst venmo jianbing, williamsburg wolf vegan dreamcatcher cornhole master cleanse fixie. Tilde brooklyn taiyaki 8-bit, skateboard cronut post-ironic pok pok. Schlitz post-ironic normcore green juice chartreuse, pop-up polaroid food truck squid sriracha fingerstache la croix salvia.",
    capacity: "20",
    cost_hourly: "$90"
  },

   dino9:{
    name: "Mosasaurs Hoffmannii",
    category: "water",
    img_path: "../img/dino-mosasurus.png",
    img_headshot_path: "",
    text: "Banjo unicorn butcher pabst venmo jianbing, williamsburg wolf vegan dreamcatcher cornhole master cleanse fixie. Tilde brooklyn taiyaki 8-bit, skateboard cronut post-ironic pok pok. Schlitz post-ironic normcore green juice chartreuse, pop-up polaroid food truck squid sriracha fingerstache la croix salvia.",
    capacity: "7",
    cost_hourly: "$60"
  }
}

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
                <Link to="/detail"/>
                <UserProfile user={theUser} logout={this.logout} />
              </nav>
              <Route exact path='/' component={()=> (
                <LandingPage
                  dinos={dinos}
                />)}
              />
              <Route path='/cart' component={Cart} />
              <Route path='/detail' component={()=> (
                <Details
                  dinos={dinos}
                />)}
              />
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
