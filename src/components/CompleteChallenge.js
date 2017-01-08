import React from 'react'
import Modal from 'boron/DropModal'

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
            onClick={(e) => this.onCheckedSubmit(e)}>
            &#10003;
          </button>
          :
          <button
            className='check-challenge'
            onClick={(e) => this.onCheckedSubmit(e)}>
            &#10003;
          </button>}

      </div>
    )
  }
})

export default CompleteChallenge