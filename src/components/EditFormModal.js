import React, { Component } from 'react'
import Modal from 'boron/DropModal'

import EditForm from './EditForm.js'

export default class EditFormModal extends Component {
  showModal() {
    this.refs.modal.show()
  }

  hideModal(e){
    e.preventDefault()
    this.refs.modal.hide()
  }

  render() {
    const { challenge, onEditTitle, onEditBody, removeChallenge, handleImageChange, draftChallengeTitle, draftChallengeBody, editChallenge, imagePreviewURL } = this.props

    return (
      <div>
        <div className='card-nav'>
        </div>

        <button
          className='edit-btn'
          aria-label='edit challenge button'
          onClick={this.showModal.bind(this)}>
          &#9998;
        </button>

        <Modal
          className='edit-modal'
          ref="modal">

          <EditForm
            hideModal={(e) => this.hideModal(e)}
            challenge={challenge}
            handleImageChange={handleImageChange}
            onEditTitle={onEditTitle}
            draftChallengeTitle={draftChallengeTitle}
            onEditBody={onEditBody}
            draftChallengeBody={draftChallengeBody}
            removeChallenge={removeChallenge}
            editChallenge={editChallenge}
            imagePreviewURL={imagePreviewURL}
          />

        </Modal>
      </div>
    )
  }
}
