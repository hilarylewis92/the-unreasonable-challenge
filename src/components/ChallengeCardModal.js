import React from 'react'
import Modal from 'boron/DropModal'

import CompleteChallenge from './CompleteChallenge'
import EditFormModal from './EditFormModal'
import CardDisplay from './CardDisplay'

const ChallengeCardModal = React.createClass({
  showModal() {
    this.refs.modal.show()
  },

  hideModal(e){
    e.preventDefault()
    this.refs.modal.hide()
  },

  onCheckedSubmit(e) {
    const { key } = this.props.challenge
    e.preventDefault()
    this.props.toggleCheck(key)
  },

  render() {
    const { challenge } = this.props

    return (
      <div>

        <button
          className='show-single-card'
          aria-label='show full challenge'
          onClick={this.showModal}>
          &#8943;
        </button>

        <Modal
          className='modal-card'
          ref="modal">

          <li
            className='challenge-card-item'>

            <CardDisplay
              challenge={challenge}
            />

            <div
              className='single-challenge-body full-challenge-body'
              aria-label='challenge body'>
              {challenge.body}
            </div>

          </li>
        </Modal>
      </div>
    )
  }
})

export default ChallengeCardModal
