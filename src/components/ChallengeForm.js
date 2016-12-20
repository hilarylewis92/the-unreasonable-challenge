import React from 'react';
import Modal from 'boron/DropModal';

import { Link } from 'react-router'

const ChallengeForm = React.createClass({
  showModal() {
    this.refs.modal.show();
  },
  hideModal(){
    this.refs.modal.hide()
  },

  render() {
    const { onDraftedChallengeTitleChange, onDraftedChallengeBodyChange, onChallengeSubmit } = this.props
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
              onClick={onChallengeSubmit}>
              Save challenge
            </button>
          </form>
        </Modal>
      </div>
    );
  }
});

export default ChallengeForm