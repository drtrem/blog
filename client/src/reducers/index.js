import { combineReducers } from 'redux';

// Reducers
import categoryReducer from './categoryReducer';
import postReducer from './postReducer';

// Combine Reducers
var reducers = combineReducers({
  categoryState: categoryReducer,
  postState: postReducer,
});

export default reducers;
