import React, { Component } from 'react'

export default class ChallengeForm extends Component {
  onChallengeSubmit(e) {
    e.preventDefault()
    this.props.addNewChallenge()
    this.props.hideModal(e)
  }

  toggleAddChallengeBtn() {
    const { draftChallengeTitle, draftChallengeBody } = this.props

    var disabled = draftChallengeTitle && draftChallengeBody ? false : true
    return disabled
  }

  render() {
    const { onDraftedChallengeTitleChange, onDraftedChallengeBodyChange, handleImageChange, hideModal, imagePreviewURL } = this.props

    var imagePreview = imagePreviewURL
      ? <img className='image-preview' src={imagePreviewURL} />
      : <img className='photo-camera' src={require('../images/camera.png')} />

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

        <div>
          {imagePreview}
        </div>

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
          disabled={this.toggleAddChallengeBtn()}
          className='add-challenge-btn-form'
          aria-label='add challenge'
          onClick={(e) => this.onChallengeSubmit(e)}>
          save
        </button>

      </form>
    )
  }
}
