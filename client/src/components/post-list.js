import React, { Component } from 'react';
import EditPostForm from './EditPostForm';
import * as postApi from '../API/postApi';
import { Link } from 'react-router';

class PostList extends Component {
  render() {
    return (
      this.props.posts.map( post => {
        if ( (this.props.editingPostId === post.id) && (this.props.id === post.project_id) ) {
          return (<EditPostForm 
            post={post} 
            key={post.id} 
            editPost={postApi.editPost}/>)
        } else {
            if (post.project_id === this.props.id) {
              return ( 
                <div className = "row justify-content-center" key={post.id}>
                  <li className = "list-group-item col-xl-5" key = {post.id}>
                    <Link className = "row justify-content-center" to = {`/posts/${post.id}/${post.name}/${post.content}/${post.file}`}>
                      Post name:{post.name}
                    </Link>
                    <br/>
                    <span>Content: {post.content}</span>
                    <br/>
                    <img src={post.file.standard.url} />
                    <br/>
                    <span className = "float-right">
                      <a onClick={() => postApi.editingPost(post.id)} className="btn btn-primary">Edit</a>
                      <a onClick={() => postApi.removePost(post.id)} className="btn btn-danger">Delete</a>
                    </span>
                  </li> 
                </div>
              );
            }
          }
      })
    )
  }
}

export default PostList;
