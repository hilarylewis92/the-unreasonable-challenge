import React from 'react'

const EditForm = React.createClass({
  onEditChallengeSubmit(e) {
    const { key } = this.props.challenge
    e.preventDefault()
    this.props.editChallenge(key)
    this.props.hideModal(e)
  },

  onRemoveChallengeSubmit(e) {
    const { key } = this.props.challenge
    e.preventDefault()
    this.props.removeChallenge(key)
    this.props.hideModal(e)
  },

  render() {
    const { challenge, onEditTitle, onEditBody, removeChallenge, handleImageChange, draftChallengeTitle, draftChallengeBody } = this.props

    return (
      <form className='edit-form'>

        <button
          className='close-edit-modal'
          onClick={(e) => this.props.hideModal(e)}>
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
          value={draftChallengeTitle || challenge.title}
          onChange={onEditTitle}
        />

        <textarea
          className='edit-body-field input'
          type='text'
          value={draftChallengeBody || challenge.body}
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
    )
  }
})

export default EditForm
