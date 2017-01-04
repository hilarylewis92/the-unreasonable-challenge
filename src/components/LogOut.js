import React, { Component } from 'react';
import firebase, { signOut } from '../firebase';

export default class LogOut extends Component {
  render() {
    const { user } = this.props
    return(
      <section className="Log-Out">
        <button
          className='log-out-btn'
          onClick={()=>signOut()}>
          Sign out
        </button>

        <h4
          className ='user-display'>
          Welcome, {user.displayName}!
        </h4>

      </section>
    )
  }
}
