import React, { Component } from 'react'

export default class EditForm extends Component {
  onEditChallengeSubmit(e) {
    const { key } = this.props.challenge
    e.preventDefault()
    this.props.editChallenge(key)
    this.props.hideModal(e)
  }

  onRemoveChallengeSubmit(e) {
    const { key } = this.props.challenge
    e.preventDefault()

    if(confirm('Are you sure you want to delete this challenge?')) {
      this.props.removeChallenge(key)
      this.props.hideModal(e)
    }
  }
  
  render() {
    const { challenge, onEditTitle, onEditBody, removeChallenge, handleImageChange, draftChallengeTitle, draftChallengeBody, imagePreviewURL } = this.props

    return (
      <form
        className='edit-form'
        aria-label='edit challenge form'>

        <button
          className='close-edit-modal'
          aria-label='close edit modal'
          onClick={(e) => this.props.hideModal(e)}>
          &#10005;
        </button>

        <h2
          className='edit-form-title'
          aria-label='edit form title'>
          Edit Challenge
        </h2>

        <img
          className='image-preview'
          src={imagePreviewURL || challenge.image}
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
            new image
          </label>
        </div>

        <input
          className='edit-title-field input'
          aria-label='edit title'
          type='text'
          value={draftChallengeTitle || challenge.title}
          onChange={onEditTitle}
        />

        <textarea
          className='edit-body-field input'
          aria-label='edit body'
          type='text'
          value={draftChallengeBody || challenge.body}
          onChange={onEditBody}
        />

        <button
          className='edit-remove-challenge'
          aria-label='remove challenge'
          onClick={(e) => this.onRemoveChallengeSubmit(e)}>
          remove
        </button>

        <button
          className='update-challenge-btn'
          aria-label='save edit'
          onClick={(e) => this.onEditChallengeSubmit(e)}>
          save
        </button>

      </form>
    )
  }
}
