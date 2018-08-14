import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostList from '../components/post-list';
import * as postApi from '../API/postApi';
import NewPostForm from './NewPostForm';

class PostsContainer extends Component {
  componentDidMount() {
    postApi.getPosts();
  }

  render() {
    return (
      <div className="tasks-container">
        <PostList
          id={this.props.id}
          posts={this.props.posts}
          editingPostId={this.props.editingPostId} />
        <NewPostForm onNewPost={postApi.addNewPost} id={this.props.id} />
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
