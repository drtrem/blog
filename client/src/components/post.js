import React, { Component } from 'react';

class Post extends Component {
  render() {
    return (<h1>User Profile for postId: {this.props.params.postId}</h1>);
  }
};

export default Post;