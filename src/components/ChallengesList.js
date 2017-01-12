import React, { Component } from 'react'
import Masonry from 'react-masonry-component'

import ChallengeCardModal from './ChallengeCardModal'
import EditFormModal from './EditFormModal'
import ChallengeCount from './ChallengeCount'
import CardDisplay from './CardDisplay'

var masonryOptions = {
  transitionDuration: 1
}

export default class ChallengesList extends Component {
  constructor() {
  super()
    this.state = {
      currentChallenge: {},
      currentIndex: {},
    }
  }

  clickPrev(i, challenge) {
    const { challengesList } = this.props
    let newIndex

    i > 0
      ? newIndex = i - 1
      : newIndex = 0

    const challengeList = challengesList[newIndex]

    this.setState ({
      currentChallenge: challengeList,
      currentIndex: newIndex,
    })
  }

  clickNext(i, challenge) {
    const { challengesList, user } = this.props
    let newIndex

    i < challengesList.length - 1
      ? newIndex = i + 1
      : newIndex = i

    const challengeList = challengesList[newIndex]

    this.setState ({
      currentChallenge: challengeList,
      currentIndex: newIndex,
    })
  }

  grabChallenge (challenge, i) {
    this.setState ({
      currentChallenge: challenge,
      currentIndex: i
    })
    this.refs.modal.showModal()
  }

  render() {
    const{ user, challengesList, onEditTitle, onEditBody, editChallenge, removeChallenge, addCount, handleImageChange, draftChallengeTitle, draftChallengeBody, imagePreviewURL } = this.props

    var challenges = challengesList.map((challenge, i) => {

      var bodyText = challenge.body.length > 100
        ? challenge.body.slice(0, 100) + ` ...`
        : challenge.body

      return (
        <li
          className='challenge-elements is-complete'
          key={challenge.key}>

          <CardDisplay
            challenge={challenge}
          />

          <div
            className='single-challenge-body'
            aria-label='challenge body'>
            {bodyText}
          </div>

          <EditFormModal
            challenge={challenge}
            editChallenge={editChallenge}
            removeChallenge={removeChallenge}
            handleImageChange={handleImageChange}
            onEditTitle={onEditTitle}
            draftChallengeTitle={draftChallengeTitle}
            onEditBody={onEditBody}
            draftChallengeBody={draftChallengeBody}
            imagePreviewURL={imagePreviewURL}
          />

          <ChallengeCount
            challenge={challenge}
            addCount={addCount}
          />

          <button
            className='show-single-card'
            aria-label='show full challenge'
            onClick={() => this.grabChallenge(challenge, i)}>
            &#9776;
          </button>

        </li>
      )
    })

    return (
      <div
        className="ChallengesList">

        <Masonry
          className={'incomplete'}
          elementType={'ul'}
          options={masonryOptions}
          disableImagesLoaded={false}
          updateOnEachImageLoad={false}
        >
          {challenges}
        </Masonry>

        <ChallengeCardModal
          ref='modal'
          challenge={this.state.currentChallenge}
          i={this.state.currentIndex}
          clickNext={this.clickNext.bind(this)}
          clickPrev={this.clickPrev.bind(this)}
          user={user}
        />

      </div>
    )
  }
}
