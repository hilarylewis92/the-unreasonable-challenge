import React from 'react'
import Modal from 'boron/DropModal'

const ChallengeForm = React.createClass({
  showModal() {
    this.refs.modal.show()
  },

  hideModal(e){
    e.preventDefault()
    this.refs.modal.hide()
  },

  onChallengeSubmit(e) {
    e.preventDefault()
    this.props.addNewChallenge()
    this.hideModal(e)
  },

  render() {
    const { onDraftedChallengeTitleChange, onDraftedChallengeBodyChange, handleImageChange } = this.props

    return (
      <div>
        <button
          className='add-challenge-btn'
          onClick={this.showModal}>
          +
        </button>

        <Modal
          className='modal-form'
          ref="modal">

          <form className='form'>

            <button
              className='close-modal'
              onClick={(e) => this.hideModal(e)}>
              &#10005;
            </button>

            <h2
              className='form-title'>
              New Challenge
            </h2>

            <img
              className='photo-camera'
              src={require('../images/camera.png')}
            />

            <input
              className='add-image-btn'
              type='file'
              name='pic'
              accept='image/*'
              onChange={handleImageChange}
            />

            <input
              className='form-title-field input'
              type='text'
              placeholder='challenge title'
              onChange={onDraftedChallengeTitleChange}
            />

            <textarea
              className='form-body-field input'
              type='text'
              placeholder='compose challenge'
              onChange={onDraftedChallengeBodyChange}
            />

            <button
              className='add-challenge-btn-form'
              onClick={(e) => this.onChallengeSubmit(e)}>
              save
            </button>

          </form>
        </Modal>
      </div>
    )
  }
})

export default ChallengeForm
