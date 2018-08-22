import React, { Component } from 'react';
import { connect } from 'react-redux';

import CommentsPost from '../views/commentsPost-list'
import * as commentApi from '../../API/commentApi';

class CommentPostContainer extends Component {
  componentDidMount() {
    commentApi.getCommentsPosts(this.props.postId);
  }

  render() {
    return (
      <div className="tasks-container">
        <CommentsPost postId={this.props.postId} commentsposts={this.props.commentsposts}/>
      </div>
    )
  }
}

const mapStateToProps = function(store) {
  return {
    commentsposts: store.commentState.commentsposts
  };
};

export default connect(mapStateToProps)(CommentPostContainer); 
 