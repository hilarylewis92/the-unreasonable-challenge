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
      <form
        className='form'
        aria-label='challenge form'>

        <button
          className='close-modal'
          aria-label='close form'
          onClick={(e) => this.props.hideModal(e)}>
          &#10005;
        </button>

        <h2
          className='form-title'>
          New Challenge
        </h2>

        <img
          className='photo-camera'
          aria-label='camera image'
          src={require('../images/camera.png')}
        />

      <div>
        <input
          className='file inputfile'
          aria-label='add image'
          type='file'
          name='file'
          id='file'
          accept='image/*'
          onChange={handleImageChange}
          />
        <label htmlFor='file'>
          add image
        </label>
      </div>

        <input
          className='form-title-field input'
          aria-label='add title'
          type='text'
          placeholder='challenge title'
          onChange={onDraftedChallengeTitleChange}
        />

        <textarea
          className='form-body-field input'
          aria-label='add body'
          type='text'
          placeholder='compose challenge'
          onChange={onDraftedChallengeBodyChange}
        />

        <button
          className='add-challenge-btn-form'
          aria-label='add challenge'
          onClick={(e) => this.onChallengeSubmit(e)}>
          save
        </button>

      </form>
    )
  }
})

export default ChallengeForm
