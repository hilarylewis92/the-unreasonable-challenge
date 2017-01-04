import React, { Component } from 'react';
import firebase, { signOut } from '../firebase';

export default class LogOut extends Component {
  render() {
    const { user } = this.props
    return(
      <section className="Log-Out">
        <img
          src={require('../images/signout.png')}
          className='log-out-btn'
          onClick={()=>signOut()}
          />

        <h4
          className ='user-display'>
          Welcome, {user.displayName}!
        </h4>

      </section>
    )
  }
}
