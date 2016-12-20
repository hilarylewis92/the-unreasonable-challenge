import React, { Component } from 'react'
import firebase, { reference } from '../firebase'

import LogOut from './LogOut'
import LogIn from './LogIn'
import Header from './Header'
import AddChallenge from './AddChallenge'
import Search from './Search'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      user: null,
      challenges: [],
      challenge: ''
    }
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => this.setState({ user }));
  }

  render() {
    const { user } = this.state

    return (
      <div className="Application">
        {user ?
        <section>
          <Search />
          <LogOut user={user} />
          <Header user={user} />
          <AddChallenge />
        </section>

      :<section>
        <LogIn user={user} />
      </section>
    }
    </div>
    )
  }
}
