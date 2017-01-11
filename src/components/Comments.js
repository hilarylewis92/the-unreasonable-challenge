import React, { Component } from 'react'
import firebase, { update } from '../firebase'


export default class Comments extends Component {
  constructor() {
    super()
    this.state = {
      comment: '',
      comments: null,
    }
  }

  onCommentChange(e) {
    this.setState({
      comment: e.target.value
    })
  }

  toggleCommentBtn() {
    const { comment } = this.state

    var disabled = comment ? false : true
    return disabled
  }

  submitComment(e){
    e.preventDefault()
    const { user } = this.props
    const { comment } = this.state
    const { comments, key } = this.props.challenge

    let commentArray = comments ? comments : []

    commentArray.push({
      comment: comment,
      name: user.displayName
    })

    this.setState ({
      comments: commentArray
    })

    firebase.database().ref(`challenges/${key}`).update({
      comments: commentArray
    })

    this.setState ({
      comment: ''
    })
  }

  render() {
    const { comment } = this.state
    const { comments } = this.props.challenge

    let array = comments ? comments : []

    var commentsList = array.map((comment, i) => {
      return (
        <li
          className='Comments'
          key={i}>

          <p
            className='comment-name'>
            {comment.name}
          </p>

          <p
            className='comment-display'>
            {comment.comment}
          </p>

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
          placeholder='comment...'
          value={comment}
          onChange={(e) => this.onCommentChange(e)}
        />

        <button
          disabled={this.toggleCommentBtn()}
          className='comment-btn'
          onClick={(e) => this.submitComment(e)}>
          submit
        </button>

      </div>
    )
  }
}
