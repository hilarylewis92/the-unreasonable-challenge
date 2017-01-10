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

        {challenge.checked ?
          <button
            className='checked'
            aria-label='challenge completed'
            onClick={(e) => this.onCheckedSubmit(e)}>
            &#10003;
          </button>
          :
          <button
            className='check-challenge'
            aria-label='challenge incomplete'
            onClick={(e) => this.onCheckedSubmit(e)}>
            &#10003;
          </button>}

      </div>
    )
  }
})

export default CompleteChallenge
