import React, { Component } from 'react'
import firebase, { signIn } from '../firebase'

export default class LogIn extends Component {
  render() {
    const { user } = this.props

    return(
      <section
        className="Log-In">

        <quote
          className='quote'>
          The reasonable man adapts himself to the world; the unreasonable one persists in trying to adapt the world to himself. Therefore all progress depends on the unreasonable man.
          ~George Bernard Shaw~
        </quote>

        <button
          className='log-in-btn'
          onClick={() => signIn()}>
          Sign in with Google
        </button>

      </section>
    )
  }
}
