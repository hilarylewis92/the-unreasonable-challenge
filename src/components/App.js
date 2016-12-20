import React, { Component } from 'react'
import firebase, { extend } from '../firebase'
import { map } from 'lodash';

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
      challengesList: []
    }
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => this.setState({ user },
      () => {firebase.database().ref(user.uid).on('value',
        (snapshot) => {
          const challenges = snapshot.val() || {}
          let currentChallenge = map(challenges,
            (val, key) => extend(val, {key}))
          this.setState({
            challengesList: currentChallenge
          })
        }
      )}
    ))
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
