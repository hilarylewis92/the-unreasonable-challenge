import React, { Component } from 'react'
import firebase, { reference, update, remove } from '../firebase'
import { map, extend, pick, filter } from 'lodash';
import moment from 'moment'

import LogIn from './LogIn'
import Header from './Header'
import ChallengesList from './ChallengesList'
import ChallengeFormModal from './ChallengeFormModal'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      challengesList: [],
      draftChallengeTitle: '',
      draftChallengeBody: '',
      imagePreviewURL: '',
      file: '',
      user: null,
    }
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => this.setState({ user },

      () => {reference.limitToLast(100).on('value',
        (snapshot) => {
          const challenges = snapshot.val() || {};
          let currentChallenges = map(challenges,
            (val, key) => extend(val, { key }))

          this.setState({
            challengesList: currentChallenges
          })
        }
      )}
    ))
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
    e.preventDefault()

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
      user: pick(user, 'displayName', 'email', 'uid', 'photoURL'),
      title: draftChallengeTitle,
      body: draftChallengeBody,
      count: 0,
      image: imagePreviewURL,
      createdAt: moment().format('MMMM Do'),
      createdMonth: moment().format('MMMM YYYY'),
      comments: null,
    })

    this.setState({
      draftChallengeTitle: '',
      draftChallengeBody: '',
      imagePreviewURL: '',
    })
  }

  removeChallenge(key) {
    this.state.challengesList.map(challenge => {
      if(key === challenge.key) {
        firebase.database().ref(`challenges/${key}`).remove()
      } else {
        return
      }
    })
  }

  addCount(key) {
    this.state.challengesList.filter((challenge) => {
      if(key === challenge.key) {
        firebase.database().ref(`challenges/${key}`).update({
          count: challenge.count+=1,
        })
      }
    })
  }

  editChallenge (key) {
    const { draftChallengeTitle, draftChallengeBody, imagePreviewURL } = this.state

    this.state.challengesList.filter((challenge) => {
      if (challenge.key === key) {
        let oldTitle = challenge.title
        let oldBody = challenge.body
        let oldImage = challenge.image

        const newTitle = draftChallengeTitle ? draftChallengeTitle: oldTitle
        const newBody = draftChallengeBody ? draftChallengeBody: oldBody
        const newImage = imagePreviewURL ? imagePreviewURL: oldImage

        firebase.database().ref(`challenges/${key}`).update({
          title: newTitle,
          body: newBody,
          image: newImage,
        })
      }
      this.setState({
        draftChallengeTitle: '',
        draftChallengeBody: '',
        imagePreviewURL: '',
      })
    })
  }

  render() {
    const { user, challengesList, draftChallengeTitle, draftChallengeBody, imagePreviewURL } = this.state

    return (
      <div
        className="Application">
        {user ?
        <section>

          <Header
            user={user}
          />

          <ChallengeFormModal
            onDraftedChallengeTitleChange={this.updateChallengeTitleState.bind(this)}
            onDraftedChallengeBodyChange={this.updateChallengeBodyState.bind(this)}
            handleImageChange={this.updateChallengeImageState.bind(this)}
            addNewChallenge={() => this.addNewChallenge()}
            imagePreviewURL={imagePreviewURL}
          />

          <ChallengesList
            database={firebase}
            challengesList={challengesList}
            removeChallenge={this.removeChallenge.bind(this)}
            onEditTitle={this.updateChallengeTitleState.bind(this)}
            onEditBody={this.updateChallengeBodyState.bind(this)}
            handleImageChange={this.updateChallengeImageState.bind(this)}
            editChallenge={this.editChallenge.bind(this)}
            addCount={this.addCount.bind(this)}
            draftChallengeTitle={draftChallengeTitle}
            draftChallengeBody={draftChallengeBody}
            imagePreviewURL={imagePreviewURL}
          />

        </section>

      :<section>

        <LogIn
          user={user}
        />

      </section>
    }
    </div>
    )
  }
}
