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

    var completedChallenge = challengesList.map(challenge => {

      var bodyText = challenge.body.length > 100
        ? challenge.body.slice(0, 100) + ` ...`
        : challenge.body

      return (
       challenge.checked ?
        <li
          className='challenge-elements completed'
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
        :
        null
      )
    })

    var inCompleteChallenge = challengesList.map(challenge => {

      var bodyText = challenge.body.length > 100
        ? challenge.body.slice(0, 100) + ` ...`
        : challenge.body

      return (
       !challenge.checked ?
        <li
          className='challenge-elements in-complete'
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
        :
        null
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
          {completedChallenge}
        </Masonry>

        <Masonry
          className={''}
          elementType={'ul'}
          options={masonryOptions}
          disableImagesLoaded={false}
          updateOnEachImageLoad={false}
        >
          {inCompleteChallenge}
        </Masonry>

       </div>
    )
  }
}
