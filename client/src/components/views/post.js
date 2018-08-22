import React, { Component } from 'react';
import CommentPostContainer from '../containers/commentsPost-container'; 
import NewCommentPostForm from '../forms/NewCommentPostForm';

class Post extends Component {
  render() {
    return (
            <div key={this.props.params.postId}>
              <div className = "row justify-content-center">
                <li className = "list-group-item col-xl-6">
                  <span className = "row justify-content-center">
                    Post name:{this.props.params.postName}
                  </span>
                  <br/>
                  <span>Content: {this.props.params.postContent}</span>
                  <br/>
                  <span>Content: {this.props.params.postFile}</span>
                  <br/>
                </li>
              </div>
              <div className = "row justify-content-center">
                <div className = "list-group-item col-xl-6">
                  <CommentPostContainer  
                    postId={this.props.params.postId} 
                    />
                  <NewCommentPostForm  
                    postId={this.props.params.postId}
                    />
                </div>
              </div>
            </div>
      );
  }
};

export default Post;
