import React, { Component } from 'react'
export default class Comments extends Component {
  constructor() {
    super()
    this.state = {
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
    const { comment } = this.state
    const { comments, key } = this.props.challenge
    comments.push(comment)

    this.setState ({
      comment: ''
    })

    this.props.database.database().ref(`challenges/${key}`).update({
      comments: comments
    })
  }

  render() {
    const { comments, comment } = this.state

    var commentsList = this.props.challenge.comments.map((comment, i) => {
      return (
        <li key={i}>
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
          value={comment}
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
