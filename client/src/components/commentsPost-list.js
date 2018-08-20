import React, { Component } from 'react';

class CommentsPost extends Component {
  render() {
    return (
      this.props.commentsposts.map( commentspost => {
        return (
          <div className = "row justify-content-center" key={commentspost.id}>
            <li className = "list-group-item col-xl-5" key = {commentspost.id}>
              <span>Author: {commentspost.author}</span>
              <br/>
              <span>Content: {commentspost.content}</span>
              <br/>
            </li> 
          </div>
        )
      })
    )
  }
}

export default CommentsPost;
 