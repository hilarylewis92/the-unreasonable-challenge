import React from 'react'
import Modal from 'boron/DropModal'

import EditFormModal from './EditFormModal.js'

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

            {challenge.checked ?
              <button
                className='checked'
                onClick={(e) => this.onCheckedSubmit(e)}>
                &#10003;
              </button>
              :
              <button
                className='check-challenge'
                onClick={(e) => this.onCheckedSubmit(e)}>
                &#10003;
              </button>
            }

            <img
              className='single-challenge-image-modal'
              src={challenge.image}
            />

            <div
              className='single-challenge-title-modal'>
              {challenge.title}
            </div>

            <div className='author-date'>
              ~ {challenge.user.displayName} on {challenge.createdAt} ~
            </div>

            <div
              className='single-challenge-body-modal'>
              {challenge.body}
            </div>

          </li>
        </Modal>

        <EditFormModal
          challenge={challenge}
          editChallenge={editChallenge}
          removeChallenge={removeChallenge}
          handleImageChange={handleImageChange}
          onEditTitle={onEditTitle}
          draftChallengeTitle={draftChallengeTitle}
          onEditBody={onEditBody}
          draftChallengeBody={draftChallengeBody}
          cardHideModal={(e) => this.hideModal(e)}
        />
      </div>
    )
  }
})

export default ChallengeCard
