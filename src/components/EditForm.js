import React from 'react'
import Modal from 'boron/DropModal'

import Form from './Form.js'

const EditForm = React.createClass({
  showModal() {
    this.refs.modal.show()
  },

  hideModal(e){
    e.preventDefault()
    this.refs.modal.hide()
  },

  render() {
    const { challenge, onEditTitle, onEditBody, removeChallenge, handleImageChange, draftChallengeTitle, draftChallengeBody, editChallenge } = this.props

    return (
      <div>

        <button
          className='edit-btn'
          onClick={this.showModal}>
          &#9998;
        </button>

        <Modal
          className='edit-modal'
          ref="modal">

          <Form
            hideModal={(e) => this.hideModal(e)}
            challenge={challenge}
            handleImageChange={handleImageChange}
            onEditTitle={onEditTitle}
            draftChallengeTitle={draftChallengeTitle}
            onEditBody={onEditBody}
            draftChallengeBody={draftChallengeBody}
            removeChallenge={removeChallenge}
            editChallenge={editChallenge}
          />

        </Modal>
      </div>
    )
  }
})

export default EditForm
