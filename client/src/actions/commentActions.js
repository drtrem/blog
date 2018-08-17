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
