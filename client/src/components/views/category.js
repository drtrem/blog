import React, { Component } from 'react';
import PostsContainer from '../containers/post-container';

class Category extends Component {

  render() {
    return (
      <div>
        <PostsContainer 
          categoryId={this.props.params.categoryId} />
      </div>
    );
  }
};

export default Category;