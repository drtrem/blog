import * as types from '../actions/actionTypes';

export function getCommentsSuccess(comment) {
  return {
    type: types.GET_COMMENTS_SUCCESS,
    comment
  };
}

export function setCommentSuccess(comment) {
  return {
    type: types.SET_COMMENT_SUCCESS,
    comment
  };
}

export function getCommentsPostsSuccess(comment) {
  return {
    type: types.GET_COMMENTSPOSTS_SUCCESS,
    comment
  };
}

export function setCommentsPostSuccess(comment) {
  return {
    type: types.SET_COMMENTSPOST_SUCCESS,
    comment
  };
}
