import React, { Component } from 'react';
import firebase, { signOut } from '../firebase';

export default class LogOut extends Component {
  render() {
    const { user } = this.props
    return(
      <section className="log-out">
        <span
          className ='user-display'>
          Welcome, {user.displayName}!
        </span>
        <button
          className='log-out-btn'
          onClick={()=>signOut()}>
          Log Out
        </button>
      </section>
    )
  }
}
