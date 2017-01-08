import React, { Component } from 'react'
import Masonry from 'react-masonry-component'

import ChallengeCard from './ChallengeCard'

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

          {challenge.checked ?
            <button
              className='checked check-list'
              onClick={(e) => this.onCheckedSubmit(e)}>
              &#10003;
            </button>
            :
            null
          }

          <img className='single-challenge-image'
            src={challenge.image}
          />

          <div
            className='single-challenge-title'>
            {challenge.title}
          </div>

          <div
            className='author-date'>
            ~ {challenge.user.displayName} on {challenge.createdAt} ~
          </div>

          <div
            className='single-challenge-body'>
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
