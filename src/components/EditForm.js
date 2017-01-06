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
          src={require('../images/edit-btn.png')}
          onClick={this.showModal}
        />

        <Modal
          className='edit-form'
          ref="modal">

          <form className='form'>
            <button
              className='close-modal'
              onClick={(e) => this.hideModal(e)}>
              x
            </button>

            <h2 className='form-title'>
              Edit Challenge
            </h2>

            <button
              className='remove-challenge'
              onClick={(e) => this.onRemoveChallengeSubmit(e)}>
              x
            </button>

            <input
              className='form-title-field input'
              type='text'
              placeholder={challenge.title}
              onChange={onEditTitle}
            />

            <textarea
              className='input'
              type='text'
              placeholder={challenge.body}
              onChange={onEditBody}
            />

            <button
              className='add-challenge-btn-form'
              onClick={(e) => this.onEditChallengeSubmit(e)}>
              Update challenge
            </button>

          </form>
        </Modal>
      </div>
    )
  }
})

export default EditForm
