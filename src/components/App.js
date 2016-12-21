import React, { Component } from 'react'
import firebase, { reference } from '../firebase'
import { map, extend, pick } from 'lodash';
import moment from 'moment'

import LogOut from './LogOut'
import LogIn from './LogIn'
import Header from './Header'
import ChallengeForm from './ChallengeForm'
import ChallengesList from './ChallengesList'
import Search from './Search'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      user: null,
      challengesList: [],
      draftChallengeTitle: '',
      draftChallengeBody: '',
      draftChallengeImage: ''
    }
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(
      user => this.setState({ user }
    ))
    reference.limitToLast(100).on('value', (snapshot) => {
      const challenges = snapshot.val() || {}
      this.setState({
        challengesList: map(challenges, (val, key) =>
          extend(val, { key })
        )
      })
    })
  }

  updateChallengeTitleState(e) {
    this.setState({
      draftChallengeTitle: e.target.value
    })
  }

  updateChallengeBodyState(e) {
    this.setState({
      draftChallengeBody: e.target.value
    })
  }

  updateChallengeImageState(e) {
    this.setState({
      draftChallengeImage: e.target.value
    })
  }

  addNewChallenge() {
    const { user, draftChallengeTitle, draftChallengeBody, draftChallengeImage } = this.state
    reference.push({
      user: pick(user, 'dispayName', 'uid'),
      title: draftChallengeTitle,
      body: draftChallengeBody,
      image: draftChallengeImage,
      createdAt: moment().format('MMMM Do, h:mm a')
    })

    this.setState({
      draftChallengeTitle: '',
      draftChallengeBody: '',
      draftChallengeImage: ''
    })
  }

  render() {
    const { user, challengesList } = this.state

    return (
      <div className="Application">
        {user ?
        <section>
          <Search />
          <LogOut user={user} />
          <Header user={user} />

          <ChallengeForm
            onDraftedChallengeTitleChange={this.updateChallengeTitleState.bind(this)}
            onDraftedChallengeBodyChange={this.updateChallengeBodyState.bind(this)}
            onDraftedChallengeImageChange={this.updateChallengeImageState.bind(this)}
            onChallengeSubmit={() => this.addNewChallenge()}
          />

          <ChallengesList
            challengesList={challengesList}
          />

        </section>

      :<section>
        <LogIn user={user} />
      </section>
    }
    </div>
    )
  }
}
