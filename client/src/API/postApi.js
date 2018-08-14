import axios from 'axios';
import store from '../index';
import { getPostsSuccess, setPostSuccess, removePostSuccess, editingPostSuccess, editPostSuccess} from '../actions/postActions';

export function getPosts() {
  return axios.get('/api/v1/posts.json')
    .then(response => {
      store.dispatch(getPostsSuccess(response.data));
    })
    .catch((error) => {console.log(error)})
}

export function addNewPost(name, content, file) {
  axios.post( '/api/v1/posts', { post: {name, content, file} })
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
  axios.put( '/api/v1/posts/' + id, { post: {name, content, file} })
  .then((response) => {
    store.dispatch(editPostSuccess(response.data));
    store.dispatch(editingPostSuccess(null));
  })
  .catch((error) => {console.log(error)})
} 

export function editingPost(id) {
  store.dispatch(editingPostSuccess(id));
}
