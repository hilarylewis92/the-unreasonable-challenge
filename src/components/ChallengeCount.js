import React, { Component } from 'react'

export default class ChallengeCount extends Component {

  onCountClicked(e) {
    const { key } = this.props.challenge
    e.preventDefault()
    this.props.addCount(key)
  }

  render() {
    const { challenge, addCount } = this.props

    return (
      <div>
        <button
          className='checked'
          aria-label='challenge completed'
          onClick={(e) => this.onCountClicked(e)}>
          {challenge.count}
        </button>
      </div>
    )
  }
}
