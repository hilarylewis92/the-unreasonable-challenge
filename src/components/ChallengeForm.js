import React from 'react';
import Modal from 'boron/DropModal';


const ChallengeForm = React.createClass({
  showModal() {
    this.refs.modal.show();
  },
  hideModal(){
    this.refs.modal.hide()
  },

  onChallengeSubmit(e) {
    e.preventDefault()
    this.props.addNewChallenge()
    this.hideModal()
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
          className='model-form'
          ref="modal">
          <form className='form'>
            <h2 className='form-title'>
              What is your unreasonable challenge?
            </h2>
            <input
              type='file'
              name='pic'
              accept='image/*'
              onChange={handleImageChange}
            />
            <input
              className='form-title-field input'
              type='text'
              placeholder='title'
              onChange={onDraftedChallengeTitleChange}
            />
            <textarea
              className='form-body-field input'
              type='text'
              placeholder='write your challenge here...'
              onChange={onDraftedChallengeBodyChange}
            />
            <button
              className='add-challenge-btn-form'
              onClick={(e) => this.onChallengeSubmit(e)}>
              Save challenge
            </button>
          </form>
        </Modal>
      </div>
    );
  }
});

export default ChallengeForm
