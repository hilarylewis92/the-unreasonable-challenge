import React, { Component } from 'react'
import Masonry from 'react-masonry-component'

import ChallengeCard from './ChallengeCard'
import EditFormModal from './EditFormModal'
import CompleteChallenge from './CompleteChallenge'
import CardDisplay from './CardDisplay'

var masonryOptions = {
  transitionDuration: 0
}

export default class ChallengesList extends Component {

  render() {
    const{ challengesList, onEditTitle, onEditBody, editChallenge, removeChallenge, toggleCheck, handleImageChange, draftChallengeTitle, draftChallengeBody } = this.props

    var singleCard = challengesList.map(challenge => {
      return (
        <li
          className='challenge-elements'
          key={challenge.key}>

          <CardDisplay
            challenge={challenge}
            editChallenge={editChallenge}
            removeChallenge={removeChallenge}
            handleImageChange={handleImageChange}
            onEditTitle={onEditTitle}
            draftChallengeTitle={draftChallengeTitle}
            onEditBody={onEditBody}
            draftChallengeBody={draftChallengeBody}
            toggleCheck={toggleCheck}
          />

          <div
            className='single-challenge-body'
            aria-label='challenge body'>
            {challenge.body.slice(0, 100) + ` ...`}
          </div>

          <ul>

           <ChallengeCard
             challenge={challenge}
             onEditTitle={onEditTitle}
             onEditBody={onEditBody}
             editChallenge={editChallenge}
             removeChallenge={removeChallenge}
             toggleCheck={toggleCheck}
             handleImageChange={handleImageChange}
             draftChallengeTitle={draftChallengeTitle}
             draftChallengeBody={draftChallengeBody}
            />

          </ul>
        </li>
      )
    })

    return (
      <div
        className="ChallengesList">

        <Masonry
          className={'my-gallery-class'}
          elementType={'ul'}
          options={masonryOptions}
          disableImagesLoaded={false}
          updateOnEachImageLoad={false}
        >
          {singleCard}
        </Masonry>

       </div>
    )
  }
}
