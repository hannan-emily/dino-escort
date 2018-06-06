
import React, {Component} from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom';

class Nav extends Component {
  render() {
    return(

      <nav className="nav">
        <Link class-="link" to='/'>Dino List</Link>{' '}
        <Link class-="link" to="/cart">Cart</Link>{' '}
        <Link to="/detail"/>{' '}
      </nav>

    )
  }
}

export default Nav
