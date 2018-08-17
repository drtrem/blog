import { combineReducers } from 'redux';

// Reducers
import categoryReducer from './categoryReducer';
import postReducer from './postReducer';
import commentReducer from './commentReducer';

// Combine Reducers
var reducers = combineReducers({
  categoryState: categoryReducer,
  postState: postReducer,
  commentState: commentReducer
});

export default reducers;
