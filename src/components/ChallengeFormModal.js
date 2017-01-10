import React from 'react'
import Modal from 'boron/DropModal'

import ChallengeForm from './ChallengeForm'

const ChallengeFormModal = React.createClass({
  showModal() {
    this.refs.modal.show()
  },

  hideModal(e){
    e.preventDefault()
    this.refs.modal.hide()
  },

  render() {
    const { onDraftedChallengeTitleChange, onDraftedChallengeBodyChange, handleImageChange, addNewChallenge, imagePreviewURL, toggleModal } = this.props

    return (
      <div>

        <button
          className='add-challenge-btn'
          aria-label='add new challenge'
          onClick={this.showModal}>
          +
        </button>

        <Modal
          className='modal-form'
          ref="modal">

          <ChallengeForm
            onDraftedChallengeTitleChange={onDraftedChallengeTitleChange}
            onDraftedChallengeBodyChange={onDraftedChallengeBodyChange}
            handleImageChange={handleImageChange}
            hideModal={(e) => this.hideModal(e)}
            addNewChallenge={addNewChallenge}
            imagePreviewURL={imagePreviewURL}
          />

        </Modal>
      </div>
    )
  }
})

export default ChallengeFormModal
