import React, { Component } from 'react'

export default class Comments extends Component {
  constructor() {
    super()
    this.state = {
      comments: [],
      comment: ''
    }
  }

  updateCommentsState(e) {
    this.setState ({
      comment: e.target.value
    })
  }

  addComment(e) {
    e.preventDefault()
    const { comments, comment } = this.state

    comments.push(comment)

    this.setState({
      comment: ''
    })
  }



  render() {
    const{ challenge } = this.props
    const{ comments } = this.state

    var commentList = comments.map(comment => {
      return (
        <div>
          {comment}
        </div>
      )
    })

    return (
      <div
        className="Comments">

        {commentList}

        <input
          className='comment-on-card'
          placeholder='comment'
          onChange={(e) => this.updateCommentsState(e)}
        />

        <button
          className='submit-comment'
          onClick={(e) => this.addComment(e)}>
          comment
        </button>

      </div>
    )
  }
}
