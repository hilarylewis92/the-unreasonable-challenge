import React from 'react'

import CompleteChallenge from './CompleteChallenge'
import EditFormModal from './EditFormModal'

const CardDisplay = React.createClass({

  render() {
    const { challenge, onEditTitle, onEditBody, editChallenge, removeChallenge, toggleCheck, handleImageChange, draftChallengeTitle, draftChallengeBody } = this.props

    return (
      <div>
        <EditFormModal
          challenge={challenge}
          editChallenge={editChallenge}
          removeChallenge={removeChallenge}
          handleImageChange={handleImageChange}
          onEditTitle={onEditTitle}
          draftChallengeTitle={draftChallengeTitle}
          onEditBody={onEditBody}
          draftChallengeBody={draftChallengeBody}
        />

        <CompleteChallenge
          challenge={challenge}
          toggleCheck={toggleCheck}
        />

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

      </div>
    )
  }
})

export default CardDisplay
