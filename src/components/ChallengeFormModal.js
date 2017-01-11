import React, { Component } from 'react'
import Modal from 'boron/DropModal'

import ChallengeForm from './ChallengeForm'

export default class ChallengeFormModal extends Component {
  showModal() {
    this.refs.modal.show()
  }

  hideModal(e){
    e.preventDefault()
    this.refs.modal.hide()
  }

  render() {
    const { draftChallengeTitle, draftChallengeBody, onDraftedChallengeTitleChange, onDraftedChallengeBodyChange, handleImageChange, addNewChallenge, imagePreviewURL, toggleModal } = this.props

    return (
      <div>

        <button
          className='add-challenge-btn'
          aria-label='add new challenge'
          onClick={this.showModal.bind(this)}>
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
            draftChallengeTitle={draftChallengeTitle}
            draftChallengeBody={draftChallengeBody}
          />

        </Modal>
      </div>
    )
  }
}
