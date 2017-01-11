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

  clickPrevFun (e) {
    const { i, challenge } = this.props
    e.preventDefault()
    this.props.clickPrev(i, challenge)
  }

  clickNextFun (e) {
    const { i, challenge } = this.props
    e.preventDefault()
    this.props.clickNext(i, challenge)
  }

  render() {
    const { challenge } = this.props

    return (
      <div>

        <Modal
          className='modal-card'
          ref="modal">

          <div
            className='challenge-card-item'>

            <div
              className='challenge-count-discription'>
              This challenge has been completed {challenge.count} times.
            </div>

            <CardDisplay
              challenge={challenge}
            />
          
            <div className='arrow-container'>

              <button
                className='arrows left-arrow'
                onClick={(e) => this.clickPrevFun(e)}
              > {'<'}
              </button>

              <button
                className='arrows right-arrow'
                onClick={(e) => this.clickNextFun(e)}
              > >
              </button>

            </div>


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
}
