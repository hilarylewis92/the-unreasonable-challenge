import React from 'react';
import Modal from 'boron/DropModal';

const ChallengeCard = React.createClass({
  showModal() {
    this.refs.modal.show();
  },
  hideModal(){
    this.refs.modal.hide()
  },

  render() {
    const { challenge } = this.props
    return (
      <div>
        <button
          className='add-challenge-btn'
          onClick={this.showModal}>
          Show card
        </button>

        <Modal
          className='model-card'
          ref="modal">
          <li>
            <img className='single-challenge-image'
              src={challenge.image}
              />

            <div className='single-challenge-title'>
              {challenge.title}
            </div>

            <div className='single-challenge-body'>
              {challenge.body}
            </div>
          </li>
        </Modal>
      </div>

    );
  }
});

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
