import React, { Component } from 'react'
import Masonry from 'react-masonry-component'

export default class ChallengeCard extends Component {
  render() {
    const { challenge } = this.props

    return(
      <Masonry
        className={'my-gallery-class'}
        elementType={'ul'}
        >
          <li>
            <span>{challenge.title}</span>
            <span>{challenge.body}</span>
          </li>
      </Masonry>
    )
  }
}
