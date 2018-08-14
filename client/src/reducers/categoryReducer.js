import * as types from '../actions/actionTypes';
import _ from 'lodash';

const initialState = {
  categories: [],
  editingCategoryId: null
};

const categoryReducer = function(state = initialState, action) {

  switch(action.type) {

    case types.GET_CATEGORIES_SUCCESS:
      return Object.assign({}, state, { categories: action.categories } );

    case types.SET_CATEGORY_SUCCESS:
      return {...state, categories: [ ...state.categories, action.categoryName ]}

    case types.REMOVE_CATEGORY_SUCCESS:
      const newCategories = _.filter(state.categories, category => category.id !== action.categoryId);
      return Object.assign({}, state, { categories: newCategories });

    case types.EDITING_CATEGORY_SUCCESS:
      return Object.assign({}, state, { editingCategoryId: action.categoryId } );

    case types.EDIT_CATEGORY_SUCCESS:

      const updatedCategories = state.categories.map(category => {
        if(category.id === action.categoryId){
          return { ...category, name: action.categoryName, description: action.categoryDescription,
           }
        }
        return category
      })
      return Object.assign({}, state, { categories: updatedCategories });

    default: return state;
  }
}

export default categoryReducer;
