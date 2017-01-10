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
  super();
    this.state = {
      currentImage: 0,
    };
  }

  render() {
    const{ challengesList, onEditTitle, onEditBody, editChallenge, removeChallenge, addCount, handleImageChange, draftChallengeTitle, draftChallengeBody, imagePreviewURL} = this.props

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

         <ChallengeCardModal
           challenge={challenge}
           i={i}
          />

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

      </div>
    )
  }
}
