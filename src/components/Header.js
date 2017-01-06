import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    const { user } = this.props

    return(
      <section
        className="header">

        <h1
          className='title'>
          The Unreasonable Challenge
        </h1>

      </section>
    )
  }
}
