import * as types from '../actions/actionTypes';

export function getCategoriesSuccess(categories) {
  return {
    type: types.GET_CATEGORIES_SUCCESS,
    categories
  };
}

export function setCategorySuccess(categoryName) {
  return {
    type: types.SET_CATEGORY_SUCCESS,
    categoryName
  };
}

export function removeCategorySuccess(categoryId) {
  return {
    type: types.REMOVE_CATEGORY_SUCCESS,
    categoryId
  };
}

export function editingCategorySuccess(categoryId) {
  return {
    type: types.EDITING_CATEGORY_SUCCESS,
    categoryId
  };
}


export function editCategorySuccess(categoryId, categoryName, categoryDescription) {
  return {
    type: types.EDIT_CATEGORY_SUCCESS,
    categoryId,
    categoryName,
    categoryDescription
  };
}
