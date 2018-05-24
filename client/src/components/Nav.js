
import React, {Component} from 'react';
import axios from 'axios';

class Nav extends Component {
  render() {
    return(
      <nav className="nav">
        <Link class-="link" to='/'>Dino List</Link>{' '}
        <Link class-="link" to="/cart">Cart</Link>{' '}
        <Link to="/detail"/>{' '}
        <UserProfile user={theUser} logout={this.logout} />
      </nav>
    )
  }
}

export default Nav
