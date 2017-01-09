import React from 'react'

import CompleteChallenge from './CompleteChallenge'
import EditFormModal from './EditFormModal'

const CardDisplay = React.createClass({

  render() {
    const { challenge, onEditTitle, onEditBody, editChallenge, removeChallenge, toggleCheck, handleImageChange, draftChallengeTitle, draftChallengeBody } = this.props

    return (
      <div>

        <img
          className='single-challenge-image'
          aria-label='challenge image'
          src={challenge.image}
        />

        <div
          className='single-challenge-title'
          aria-label='challenge title'>
          {challenge.title}
        </div>

        <div
          className='author-date'
          aria-label='challenge author and date'>
          ~ {challenge.user.displayName} on {challenge.createdAt} ~
        </div>

        <CompleteChallenge
          challenge={challenge}
          toggleCheck={toggleCheck}
        />

      </div>
    )
  }
})

export default CardDisplay


// <EditFormModal
//   challenge={challenge}
//   editChallenge={editChallenge}
//   removeChallenge={removeChallenge}
//   handleImageChange={handleImageChange}
//   onEditTitle={onEditTitle}
//   draftChallengeTitle={draftChallengeTitle}
//   onEditBody={onEditBody}
//   draftChallengeBody={draftChallengeBody}
// />
