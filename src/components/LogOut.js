import React, { Component } from 'react'
import firebase, { signOut } from '../firebase'

export default class LogOut extends Component {
  render() {
    const { user } = this.props

    return(
      <section
        className="Log-Out">

        <h4
          className ='user-display'>
          Signed in as {user.displayName}
        </h4>

        <img
          className='user-photo'
          src={user.photoURL}
        />

        <button
          className='log-out-btn'
          aria-label='sign out button'
          onClick={()=>signOut()}>
          sign out
        </button>

      </section>
    )
  }
}
