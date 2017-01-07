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

        <button
          className='log-out-btn'
          onClick={()=>signOut()}>
          sign out
        </button>

      </section>
    )
  }
}
