import React, { Component } from 'react'

export default class Comments extends Component {
  constructor() {
    super()
    this.state = {
      comments: [],
      comment: '',
    }
  }

  onCommentChange(e) {
    this.setState({
      comment: e.target.value
    })
  }

  submitComment(e){
    e.preventDefault()
    const { comments, comment } = this.state

    comments.push(comment)

    this.setState ({
      comments: comments
    })

    this.setState ({
      comment: ''
    })
    debugger
  }

  render() {
    const { comments } = this.state

    var commentsList = comments.filter((comment) => {
      return (
        <li>
          {comment}
        </li>
      )
    })

    return (
      <div
        className="Comments">

        <ul>
          {commentsList}
        </ul>

        <input
          className='comment-on-card'
          onChange={(e) => this.onCommentChange(e)}
        />

        <button
          onClick={(e) => this.submitComment(e)}>
          comment
        </button>

      </div>
    )
  }
}
