import React, { Component } from 'react'

export default class ChallengeCard extends Component {
  render() {
    const { challenge } = this.props

    return(
      <li>
        <span>{challenge.title}</span>
        <span>{challenge.body}</span>
      </li>
    )
  }
}
