import React from 'react'

const CompleteChallenge = React.createClass({

  onCheckedSubmit(e) {
    const { key } = this.props.challenge
    e.preventDefault()
    this.props.toggleCheck(key)
  },

  render() {
    const { challenge, toggleCheck } = this.props

    return (
      <div>
          <button
            className='checked'
            aria-label='challenge completed'
            onClick={(e) => this.onCheckedSubmit(e)}>
            {challenge.checked}
          </button>
      </div>
    )
  }
})

export default CompleteChallenge
