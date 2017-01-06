import React, { Component } from 'react'

export default class Search extends Component {
  
  render() {
    return(
      <section
        className="search">

        <input
          className='search-field'
          type='text'
          placeholder='search'
        />

      </section>
    )
  }
}
