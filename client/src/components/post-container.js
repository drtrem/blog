import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostList from '../components/post-list';
import * as postApi from '../API/postApi';
import NewPostForm from './NewPostForm';

class PostsContainer extends Component {

  render() {
    return (
      <div className="tasks-container">
        <NewPostForm onNewPost={postApi.addNewPost} id={this.props.id} />
        <PostList
          id={this.props.id}
          posts={this.props.posts}
          editingPostId={this.props.editingPostId} />
      </div>
    )
  }
}

const mapStateToProps = function(store) {
  return {
    posts: store.postState.posts,
    editingPostId: store.postState.editingPostId
  };
};

export default connect(mapStateToProps)(PostsContainer); 