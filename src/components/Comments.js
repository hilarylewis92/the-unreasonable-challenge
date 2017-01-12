import React, { Component } from 'react'
import firebase from '../firebase';


export default class Comments extends Component {
  constructor() {
    super()
    this.state = {
      comment: ''
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
    // e.preventDefault()
    const { user } = this.props
    const { comment } = this.state
    const { comments, key } = this.props.challenge

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
          disabled={this.toggleCommentBtn()}
          className='comment-btn'
          onClick={(e) => this.submitComment(e)}>
          submit
        </button>

      </div>
    )
  }
}
