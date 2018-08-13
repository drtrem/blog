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
            editTask={postApi.editPost}/>)
        } else {
            if (post.project_id === this.props.id) {
              return (  
                <div className="single-task" key={post.id}>
                  <div className="col-lg-offset-2 col-lg-8 task">
                    <form autoComplete="off">
                      <span><Link className="colorblack" to="categories/${category.id}">{post.name}</Link></span>
                      <span>{post.content}</span>
                      <a onClick={() => postApi.removePost(post.id)} className="delete-button check-taska"><img src="img/delete.png" alt=""/></a>
                      <a onClick={() => postApi.editingPost(post.id)} className="edit-button check-taska"><img src="img/edit.png" alt=""/></a>
                      <a onClick={() => postApi.editingPost(post.id)} className="edit-button check-taska"><img src="img/disk.png" alt=""/></a>
                    </form>
                  </div>
                </div>);
            }
          }
      })
    )
  }
}

export default PostList;