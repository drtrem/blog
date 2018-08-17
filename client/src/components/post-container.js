import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostList from './post-list';
import NewPostForm from './NewPostForm';
import * as postApi from '../API/postApi';

import CommentContainer from './comment-container';


class PostsContainer extends Component {
  componentDidMount() {
    postApi.getPosts(this.props.categoryId);
  }

  render() {
    return (
      <div className="tasks-container">
        <PostList
          id={this.props.id}
          posts={this.props.posts}
          editingPostId={this.props.editingPostId} 
          categoryId={this.props.categoryId}/>
        <CommentContainer categoryId={this.props.categoryId}/>
        <span className = "row justify-content-center">Add Post:</span>
        <NewPostForm onNewPost={postApi.addNewPost} categoryId={this.props.categoryId}/>
      </div>
    )
  }
}

const mapStateToProps = function(store) {
  return {
    posts: store.postState.posts,
    editingPostId: store.postState.editingPostId,
  };
};

export default connect(mapStateToProps)(PostsContainer); 
 