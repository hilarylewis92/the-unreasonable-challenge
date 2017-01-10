import React from 'react'
import Modal from 'boron/DropModal'

import EditFormModal from './EditFormModal'
import CardDisplay from './CardDisplay'
import Comments from './Comments'

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
    this.props.addCount(key)
  },

  render() {
    const { challenge } = this.props

    return (
      <div>

        <button
          className='show-single-card'
          aria-label='show full challenge'
          onClick={this.showModal}>
          ...
        </button>

        <Modal
          className='modal-card'
          ref="modal">

          <div
            className='challenge-card-item'>

            <div>
              This challenge has been completed {challenge.count} times.
            </div>

            <CardDisplay
              challenge={challenge}
            />

            <div
              className='single-challenge-body full-challenge-body'
              aria-label='challenge body'>
              {challenge.body}
            </div>

            <Comments
              challenge={challenge}
            />
          </div>
        </Modal>
      </div>
    )
  }
})

export default ChallengeCardModal
