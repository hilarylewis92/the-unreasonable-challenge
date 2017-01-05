import React, { Component } from 'react'
import firebase, { reference } from '../firebase'
import { map, extend, pick } from 'lodash';
import moment from 'moment'

import LogOut from './LogOut'
import LogIn from './LogIn'
import Header from './Header'
import ChallengeForm from './ChallengeForm'
import ChallengesList from './ChallengesList'
// import Search from './Search'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      user: null,
      challengesList: [],
      draftChallengeTitle: '',
      draftChallengeBody: '',
      file: '',
      imagePreviewURL: '',
    }
  }

  componentDidMount() {
      reference.limitToLast(100).on('value', (snapshot) => {
        const challenge = snapshot.val() || {};
        this.setState({
          challengesList: map(challenge, (val, key) => extend(val, { key }))
        })
      })

      firebase.auth().onAuthStateChanged(user => this.setState({ user }));
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
    let reader = new FileReader()
    let file = e.target.files[0]

    reader.onloadend = ()=> {
      this.setState({
        file: file,
        imagePreviewURL: reader.result
      })
    }
    reader.readAsDataURL(file)
  }

  addNewChallenge() {
    const { user, draftChallengeTitle, draftChallengeBody, imagePreviewURL } = this.state
    reference.push({
      user: pick(user, 'displayName', 'email', 'uid'),
      title: draftChallengeTitle,
      body: draftChallengeBody,
      image: imagePreviewURL,
      createdAt: moment().format('MMMM Do')
    })

    this.setState({
      draftChallengeTitle: '',
      draftChallengeBody: '',
      imagePreviewURL: ''
    })
  }

  removeChallenge(key) {
    const { uid } = this.state.user
    let newChallengesList = this.state.challengesList.filter(challenge => {
      return challenge.key !== key
    })

    this.setState({
      challengesList: newChallengesList
    })
  }

  editChallenge (key) {
    console.log(key);
  }

  render() {
    const { user, challengesList, draftChallengeTitle } = this.state

    return (
      <div className="Application">
        {user ?
        <section>
          <Header user={user} />
          <LogOut user={user} />

          <ChallengeForm
            onDraftedChallengeTitleChange={this.updateChallengeTitleState.bind(this)}
            onDraftedChallengeBodyChange={this.updateChallengeBodyState.bind(this)}
            handleImageChange={this.updateChallengeImageState.bind(this)}
            addNewChallenge={() => this.addNewChallenge()}
          />

          <ChallengesList
            challengesList={challengesList}
            removeChallenge={this.removeChallenge.bind(this)}
            onEditTitle={this.updateChallengeTitleState.bind(this)}
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
