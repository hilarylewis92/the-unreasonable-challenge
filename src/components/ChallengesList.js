import React, { Component } from 'react'
import Masonry from 'react-masonry-component'

import ChallengeCardModal from './ChallengeCardModal'
import EditFormModal from './EditFormModal'
import CompleteChallenge from './CompleteChallenge'
import CardDisplay from './CardDisplay'

var masonryOptions = {
  transitionDuration: 1
}

export default class ChallengesList extends Component {

  render() {
    const{ challengesList, onEditTitle, onEditBody, editChallenge, removeChallenge, toggleCheck, handleImageChange, draftChallengeTitle, draftChallengeBody, imagePreviewURL} = this.props



    var singleCard = challengesList.map(challenge => {

      var bodyText = challenge.body.length > 100
        ? challenge.body.slice(0, 100) + ` ...`
        : challenge.body

      return (

        <li
          className='challenge-elements'
          key={challenge.key}>

          <CardDisplay
            challenge={challenge}
          />

          <div
            className='single-challenge-body'
            aria-label='challenge body'>
            {bodyText}
          </div>

          <ul>
           <ChallengeCardModal
             challenge={challenge}
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

            <CompleteChallenge
              challenge={challenge}
              toggleCheck={toggleCheck}
            />

          </ul>
        </li>
      )
    })

    return (
      <div
        className="ChallengesList">

        <Masonry
          className={''}
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
