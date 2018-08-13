import React, { Component } from 'react';
import { Link } from 'react-router';

class PostList extends Component {
  render() {
    return (
      <ul className="post-list">
        <li><Link to="posts/2">Post 1</Link></li>
        <li><Link to="posts/1">Post 2</Link></li>
        <li><Link to="posts/3">Post 3</Link></li>
      </ul>
    );
  }
};

export default PostList;