import * as types from '../actions/actionTypes';
import _ from 'lodash';

const initialState = {
  posts: [],
  editingPostId: null
};

const postReducer = function(state = initialState, action) {

  switch(action.type) {

    case types.GET_POSTS_SUCCESS:
      return Object.assign({}, state, { posts: action.posts } );

    case types.SET_POST_SUCCESS:
      return {...state, posts: [ ...state.posts, action.post ]}

    case types.REMOVE_POST_SUCCESS:
      const newPosts = _.filter(state.posts, post => post.id !== action.postId);
      return Object.assign({}, state, { posts: newPosts });

    case types.EDIT_POST_SUCCESS:
      const updatedPosts = state.posts.map(post => {
        if(post.id === action.post.id){
          return action.post
        }
        return post
      })
      return Object.assign({}, state, { posts: updatedPosts });

    case types.EDITING_POST_SUCCESS:
      return Object.assign({}, state, { editingPostId: action.postId } );

    default: return state;
  }
}

export default postReducer;
  