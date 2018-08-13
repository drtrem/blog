import * as types from '../actions/actionTypes';

export function getPostsSuccess(posts) {
  return {
    type: types.GET_POSTS_SUCCESS,
    posts
  };
}

export function setPostSuccess(post) {
  return {
    type: types.SET_POST_SUCCESS,
    post
  };
}

export function removePostSuccess(postId) {
  return {
    type: types.REMOVE_POST_SUCCESS,
    postId
  };
}

export function editingPostSuccess(postId) {
  return {
    type: types.EDITING_POST_SUCCESS,
    postId
  };
}

export function editPostSuccess(post) {
  return {
    type: types.EDIT_POST_SUCCESS,
    post
  };
}

