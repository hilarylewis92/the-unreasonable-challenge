import React from 'react'

const CardDisplay = React.createClass({

  render() {
    const { challenge  } = this.props

    return (
      <div>

        <img
          className='single-challenge-image'
          aria-label='challenge image'
          src={challenge.image}
        />

        <img
          className='user-photo-card'
          src={challenge.user.photoURL}
        />

        <div
          className='single-challenge-title'
          aria-label='challenge title'>
          {challenge.title}
        </div>

        <div
          className='author-date'
          aria-label='challenge author and date'>
          {challenge.user.displayName}
        </div>
      </div>
    )
  }
})

export default CardDisplay
