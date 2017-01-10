import React, { Component } from 'react'
import firebase, { reference, update } from '../firebase'


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
    const { comments, key, user } = this.props.challenge

    let commentArray = comments ? comments : []

    commentArray.push({
      comment: comment,
      name: user.displayName
    })

    this.setState ({
      comment: ''
    })

    firebase.database().ref(`challenges/${key}`).update({
      comments: commentArray
    })
  }

  render() {
    const { comment } = this.state

    let array = this.props.challenge.comments ? this.props.challenge.comments : []

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
          onClick={(e) => this.submitComment(e)}>
          comment
        </button>

      </div>
    )
  }
}
