import React, { Component } from 'react';
import { connect } from 'react-redux';

import CommentList from './comment-list'
import NewCommentForm from './NewCommentForm';
import * as commentApi from '../API/commentApi';

class CommentContainer extends Component {
  componentDidMount() {
    commentApi.getComments(this.props.categoryId);
  }

  render() {
    return (
      <div className="tasks-container">
        <br/>
        <span className = "row justify-content-center">Comments Category:</span>
        <CommentList comments={this.props.comments}/>
        <br/>
        <span className = "row justify-content-center">Add Comments to Category:</span>
        <NewCommentForm categoryId={this.props.categoryId}/>
        <br/>
      </div>
    )
  }
}

const mapStateToProps = function(store) {
  return {
    comments: store.commentState.comments
  };
};

export default connect(mapStateToProps)(CommentContainer); 
 