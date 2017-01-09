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
            {bodyText}
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
