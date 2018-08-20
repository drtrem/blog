import * as types from '../actions/actionTypes';

const initialState = {
  comments: [],
  commentsposts: []
};

const commentReducer = function(state = initialState, action) {

  switch(action.type) {

    case types.GET_COMMENTS_SUCCESS:
      return Object.assign({}, state, { comments: action.comment } );

    case types.SET_COMMENT_SUCCESS:
      return {...state, comments: [ ...state.comments, action.comment ]}

    case types.GET_COMMENTSPOSTS_SUCCESS:
      return Object.assign({}, state, { commentsposts: action.comment } );

    case types.SET_COMMENTSPOST_SUCCESS:
      return {...state, commentsposts: [ ...state.commentsposts, action.comment ]}

    default: return state;
  }
}

export default commentReducer;
