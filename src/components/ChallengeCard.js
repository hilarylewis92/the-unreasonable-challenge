import React from 'react'
import Modal from 'boron/DropModal'

import CompleteChallenge from './CompleteChallenge'
import EditFormModal from './EditFormModal'
import CardDisplay from './CardDisplay'

const ChallengeCard = React.createClass({
  showModal() {
    this.refs.modal.show()
  },

  hideModal(e){
    e.preventDefault()
    this.refs.modal.hide()
  },

  onCheckedSubmit(e) {
    const { key } = this.props.challenge
    e.preventDefault()
    this.props.toggleCheck(key)
  },

  render() {
    const { challenge, onEditTitle, onEditBody, editChallenge, removeChallenge, toggleCheck, handleImageChange, draftChallengeTitle, draftChallengeBody } = this.props

    return (
      <div>

        <button
          className='show-single-card'
          onClick={this.showModal}>
          show challenge
        </button>

        <Modal
          className='modal-card'
          ref="modal">

          <li
            className='challenge-card-item'>

            <button
              className='close-modal'
              onClick={(e) => this.hideModal(e)}>
              &#10005;
            </button>

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

          </li>
        </Modal>
      </div>
    )
  }
})

export default ChallengeCard
