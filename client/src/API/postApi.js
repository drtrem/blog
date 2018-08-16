import axios from 'axios';
import store from '../index';
import { getPostsSuccess, setPostSuccess, removePostSuccess, editingPostSuccess, editPostSuccess} from '../actions/postActions';
import _ from 'lodash';

export function getPosts(category_id) {
  return axios.get('/api/v1/posts.json')
    .then(response => {
      store.dispatch(getPostsSuccess(_.filter(response.data, post => category_id == post.category_id)));
    })
    .catch((error) => {console.log(error)})
}

export function addNewPost(category_id, name, content, file) {
  axios.post( '/api/v1/posts', file , { headers: {'Content-Type': 'multipart/form-data' }})
  .then(response => {
    store.dispatch(setPostSuccess(response.data));
  })
  .catch((error) => {console.log(error)})
}

export function removePost(id) {
  axios.delete( '/api/v1/posts/' + id )
  .then(response => {
    store.dispatch(removePostSuccess(id));
  })
  .catch((error) => {console.log(error)})
}

export function editPost(id, name, content, file) { 
  axios.put( '/api/v1/posts/' + id, file , { headers: {'Content-Type': 'multipart/form-data' }})
  .then((response) => {
    store.dispatch(editPostSuccess(response.data));
    store.dispatch(editingPostSuccess(null));
  })
  .catch((error) => {console.log(error)})
} 

export function editingPost(id) {
  store.dispatch(editingPostSuccess(id));
}

  export  function validate (name, description, files) { 
    const errors = [];
    if ( ( ((/(^)([A-ZА-Я][A-ZА-Яa-zа-я])/g).test(name)) ) === false ) {
      errors.push("Мінімум 2 слова по 2 літери, перше слово з великої літери");
    }

    if ( ((/\./g).test(name)) === false ) {
      errors.push("Має включати ‘.’");
    }

    if ( ((/(\s+)/g).test(name)) === false ) {
      errors.push("Має включати ‘ ’");
    }
    
    if (description.length === 0) {
      errors.push("Має включати description");
    }

    if (files.size > 2000000) {
      errors.push("Має бути < 2000 MB");
    }
    return errors;
  }
