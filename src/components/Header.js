import React, { Component } from 'react'
import firebase, { signOut } from '../firebase'

export default class Header extends Component {
  render() {
    const { user } = this.props

    return(
      <section
        className="Header">

        <h1
          className='header-title'>
          The Unreasonable Challenge
        </h1>

        <button
          className='log-out-btn'
          aria-label='sign out button'
          onClick={()=>signOut()}>
          sign out
        </button>

        <img
          className='user-photo header-user-photo'
          src={user.photoURL}
        />

      <h4
          className ='display-name header-display-name'>
          Signed in as {user.displayName}
        </h4>

      </section>
    )
  }
}
