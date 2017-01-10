import React, { Component } from 'react'
import Modal from 'boron/DropModal'

import CardDisplay from './CardDisplay'
import Comments from './Comments'

export default class ChallengeCardModal extends Component {

  showModal() {
    this.refs.modal.show()
  }

  hideModal(e){
    e.preventDefault()
    this.refs.modal.hide()
  }

  onCheckedSubmit(e) {
    const { key } = this.props.challenge
    e.preventDefault()
    this.props.addCount(key)
  }

  clickPrev() {
    const { challenge } = this.state;

  }

  clickNext() {
    const { challenge, i } = this.props;
    console.log(i);
  }

  render() {
    const { challenge } = this.props

    return (
      <div>

        <button
          className='show-single-card'
          aria-label='show full challenge'
          onClick={this.showModal.bind(this)}>
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

            <div className='arrow-container'>

              <button
                className='arrows'
                onClick={() => this.clickPrev()}
              > {'<'}
              </button>

              <button
                className='arrows'
                onClick={() => this.clickNext()}
              > >
              </button>

            </div>

            <Comments
              challenge={challenge}
            />
          </div>
        </Modal>
      </div>
    )
  }
}
