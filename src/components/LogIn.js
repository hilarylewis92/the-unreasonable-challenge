import React, { Component } from 'react';
import firebase, { signIn } from '../firebase';

export default class LogIn extends Component {
  render() {
    const { user } = this.props
    return(
      <section className="log-in">
        <p className='quote'>
          The reasonable man adapts himself to the world; the unreasonable one persists in trying to adapt the world to himself. Therefore all progress depends on the unreasonable man.
          <br />
          ~George Bernard Shaw~
        </p>

        <img
          src={require('../images/signin.png')}
          className='log-in-btn'
          onClick={()=>signIn()}
        />

      </section>
    )
  }
}
