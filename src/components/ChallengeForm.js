import React from 'react'
import Modal from 'boron/DropModal'

const ChallengeForm = React.createClass({
  onChallengeSubmit(e) {
    e.preventDefault()
    this.props.addNewChallenge()
    this.props.hideModal(e)
  },

  render() {
    const { onDraftedChallengeTitleChange, onDraftedChallengeBodyChange, handleImageChange, hideModal } = this.props

    return (
      <form className='form'>

        <button
          className='close-modal'
          onClick={(e) => this.props.hideModal(e)}>
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
    )
  }
})

export default ChallengeForm
