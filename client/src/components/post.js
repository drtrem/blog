import React, { Component } from 'react';

class Post extends Component {
  render() {
    return (
            <div className = "row justify-content-center" key={this.props.params.postId}>
              <li className = "list-group-item col-xl-5">
                <span className = "row justify-content-center">
                  Post name:{this.props.params.postName}
                </span>
                <br/>
                <span>Content: {this.props.params.postContent}</span>
                <br/>
              </li> 
            </div>
      );
  }
};

export default Post;
