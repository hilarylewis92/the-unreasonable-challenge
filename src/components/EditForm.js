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
    const { challenge, onEditTitle, onEditBody, removeChallenge } = this.props

    return (
      <div>
        <img
          className='edit-btn'
          src={require('../images/edit.png')}
          onClick={this.showModal}
        />

        <Modal
          className='edit-modal'
          ref="modal">

          <form className='edit-form'>
            <button
              className='close-edit-modal'
              onClick={(e) => this.hideModal(e)}>
              x
            </button>

            <h2 className='edit-form-title'>
              Edit Challenge
            </h2>

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
