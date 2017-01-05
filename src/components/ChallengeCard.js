import React from 'react'
import Modal from 'boron/DropModal'

import EditForm from './EditForm.js'

const ChallengeCard = React.createClass({

  showModal() {
    this.refs.modal.show();
  },

  hideModal(e){
    e.preventDefault()
    this.refs.modal.hide()
  },

  render() {
    const { challenge, onEditTitle, onEditBody, editChallenge, removeChallenge } = this.props
    return (
      <div>
        <button
          className='show-single-card'
          onClick={this.showModal}>
          View Challenge
        </button>

        <Modal
          className='modal-card'
          ref="modal">
          <li className='challenge-card-item'>

            <button
              className='close-modal'
              onClick={(e) => this.hideModal(e)}>
              x
            </button>

            <EditForm
              challenge={challenge}
              onEditTitle={onEditTitle}
              onEditBody={onEditBody}
              editChallenge={editChallenge}
              removeChallenge={removeChallenge}
            />

            <img
              className='single-challenge-image-modal'
              src={challenge.image}
            />

            <div
              className='single-challenge-title-modal'>
              {challenge.title}
            </div>

            <div className='author-date'>
              ~ {challenge.user.displayName} on {challenge.createdAt} ~
            </div>

            <div
              className='single-challenge-body-modal'>
              {challenge.body}
            </div>

            <textarea
              className='comment-on-card'
              placeholder='write a comment...'
            />
          </li>
        </Modal>
      </div>

    );
  }
});
//
// <button
//   className='add-challenge-btn'
//   onClick={this.showModal}>
//   Show card
// </button>
// <Modal
//   className='model-card'
//   ref="modal">
//   <li className = 'challenge-elements' key={challenge.key}>
//     <button
//       className='remove-challenge-btn'
//       onClick={() => removeChallenge(challenge.key)}>
//       x
//     </button>
//
//     <img className='single-challenge-image'
//       src={challenge.image}
//       />
//
//     <div className='single-challenge-title'>
//       {challenge.title}
//     </div>
//
//     <div className='single-challenge-body'>
//       {challenge.body}
//     </div>
//
//   </li>
// </Modal>
export default ChallengeCard
