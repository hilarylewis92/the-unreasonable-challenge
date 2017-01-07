import React from 'react'
import Modal from 'boron/DropModal'

const EditForm = React.createClass({
  showModal() {
    this.refs.modal.show()
  },

  hideModal(e){
    e.preventDefault()
    this.refs.modal.hide()
  },

  onEditChallengeSubmit(e) {
    const { key } = this.props.challenge
    e.preventDefault()
    this.props.editChallenge(key)
    this.hideModal(e)
  },

  onRemoveChallengeSubmit(e) {
    const { key } = this.props.challenge
    e.preventDefault()
    this.props.removeChallenge(key)
    this.hideModal(e)
  },

  render() {
    const { challenge, onEditTitle, onEditBody, removeChallenge, handleImageChange } = this.props

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

          <form className='edit-form'>

            <button
              className='close-edit-modal'
              onClick={(e) => this.hideModal(e)}>
              &#10005;
            </button>

            <h2 className='edit-form-title'>
              Edit Challenge
            </h2>

            <input
              className='add-image-btn'
              type='file'
              name='pic'
              accept='image/*'
              onChange={handleImageChange}
            />

            <input
              className='edit-title-field input'
              type='text'
              placeholder={challenge.title}
              onChange={onEditTitle}
            />

            <textarea
              className='edit-body-field input'
              type='text'
              placeholder={challenge.body}
              onChange={onEditBody}
            />

            <button
              className='edit-remove-challenge'
              onClick={(e) => this.onRemoveChallengeSubmit(e)}>
              remove
            </button>

            <button
              className='update-challenge-btn'
              onClick={(e) => this.onEditChallengeSubmit(e)}>
              save
            </button>

          </form>
        </Modal>
      </div>
    )
  }
})

export default EditForm
