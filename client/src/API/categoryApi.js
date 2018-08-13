import axios from 'axios';
import store from '../index';
import { getCategoriesSuccess, setCategorySuccess, removeCategorySuccess, editingCategorySuccess, editCategorySuccess } from '../actions/categoryActions';

export function getCategories() {
  return axios.get('/api/v1/categories.json')
    .then(response => {
      store.dispatch(getCategoriesSuccess(response.data));
    })
    .catch((error) => {console.log(error)})
}

export function addNewCategory(name) {
  axios.post( '/api/v1/categories', { category: {name} })
  .then(response => {
    store.dispatch(setCategorySuccess(response.data));
  })
  .catch((error) => {console.log(error)})
}

export function removeCategory(id) {
  axios.delete( '/api/v1/categories/' + id )
  .then(response => {
    store.dispatch(removeCategorySuccess(id));
  })
  .catch((error) => {console.log(error)})
}

export function editCategory(id, name) {
  axios.put( '/api/v1/categories/' + id, { category: {name} })
  .then((response) => {
    store.dispatch(editCategorySuccess(response.data.id, response.data.name));
    store.dispatch(editingCategorySuccess(null));
  })
  .catch((error) => {console.log(error)})
}

export function editingCategory(id) {
  store.dispatch(editingCategorySuccess(id));
}