import React, { Component } from 'react';

class CommentList extends Component {
  render() {
    return (
      this.props.comments.map( comment => {
        return (
          <div className = "row justify-content-center" key={comment.id}>
            <li className = "list-group-item col-xl-5" key = {comment.id}>
              <span>Author: {comment.author}</span>
              <br/>
              <span>Content: {comment.content}</span>
              <br/>
            </li> 
          </div>
        )
      })
    )
  }
}

export default CommentList;
 